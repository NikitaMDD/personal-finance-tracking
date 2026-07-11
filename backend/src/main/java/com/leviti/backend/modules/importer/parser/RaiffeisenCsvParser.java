package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.bank.enums.BankCode;
import com.leviti.backend.modules.importer.util.MoneyParser;
import com.leviti.backend.modules.importer.util.TransactionTitleExtractor;
import com.leviti.backend.modules.transaction.entity.TransactionType;

import lombok.extern.slf4j.Slf4j;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;

import java.math.BigDecimal;

import java.nio.charset.StandardCharsets;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class RaiffeisenCsvParser
        implements StatementParser {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern(
                    "dd.MM.yyyy HH:mm"
            );

    @Override
    public BankCode supportedBank() {

        return BankCode.RAIFFEISEN;

    }

    @Override
    public List<ImportedTransaction> parse(
            MultipartFile file
    ) throws IOException {

        List<ImportedTransaction> transactions =
                new ArrayList<>();

        CSVParser parser =
                CSVFormat.DEFAULT
                        .builder()
                        .setDelimiter('\t')
                        .setHeader()
                        .setSkipHeaderRecord(true)
                        .get()
                        .parse(
                                new InputStreamReader(
                                        file.getInputStream(),
                                        StandardCharsets.UTF_8
                                )
                        );

        for (CSVRecord record : parser) {

            String income = record.get(
                    "Сумма в валюте операции (поступления)"
            );

            String expense = record.get(
                    "Сумма в валюте операции (расходы)"
            );

            TransactionType type;
            BigDecimal amount;

            if (!MoneyParser.isEmpty(income)) {
                type = TransactionType.INCOME;
                amount = MoneyParser.parse(income);
            } else {
                type = TransactionType.EXPENSE;
                amount = MoneyParser.parse(expense);
            }

            String description =
                    record.get(
                            "Детали операции (назначение платежа)"
                    );

            String title =
                    TransactionTitleExtractor.extract(
                            description
                    );

            LocalDateTime date =
                    LocalDateTime.parse(
                            record.get("Дата операции"),
                            FORMATTER
                    );

            transactions.add(
                    new ImportedTransaction(
                            title,
                            description,
                            amount,
                            date,
                            type
                    )
            );
        }
        log.info(
                "Parsed {} Raiffeisen transactions.",
                transactions.size()
        );
        return transactions;
    }
}