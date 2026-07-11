package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.bank.enums.BankCode;
import com.leviti.backend.modules.importer.util.TransactionTitleExtractor;
import com.leviti.backend.modules.transaction.entity.TransactionType;

import lombok.extern.slf4j.Slf4j;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.math.BigDecimal;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import java.time.format.DateTimeFormatter;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class AlfaExcelParser implements StatementParser {

    private static final int FIRST_TRANSACTION_ROW = 19;

    private static final DateTimeFormatter DATE_FORMATTER =
            DateTimeFormatter.ofPattern(
                    "dd.MM.yyyy"
            );

    @Override
    public BankCode supportedBank() {
        return BankCode.ALFA;
    }

    @Override
    public List<ImportedTransaction> parse(
            MultipartFile file
    ) throws IOException {

        List<ImportedTransaction> transactions =
                new ArrayList<>();

        try (
                Workbook workbook =
                        new XSSFWorkbook(
                                file.getInputStream()
                        )
        ) {

            Sheet sheet =
                    workbook.getSheetAt(0);

            for (
                    int i = FIRST_TRANSACTION_ROW;
                    i <= sheet.getLastRowNum();
                    i++
            ) {
                Row row =
                        sheet.getRow(i);

                if (row == null) {
                    continue;
                }

                Cell dateCell =
                        row.getCell(0);

                Cell descriptionCell =
                        row.getCell(4);

                Cell amountCell =
                        row.getCell(5);

                if (
                        dateCell == null ||
                                descriptionCell == null ||
                                amountCell == null
                ) {
                    continue;
                }

                String description =
                        descriptionCell
                                .getStringCellValue()
                                .trim();

                if (description.isBlank()) {
                    continue;
                }

                String title =
                        TransactionTitleExtractor.extract(
                                description
                        );

                BigDecimal amount =
                        BigDecimal.valueOf(
                                amountCell
                                        .getNumericCellValue()
                        );

                TransactionType type =
                        amount.signum() >= 0
                                ? TransactionType.INCOME
                                : TransactionType.EXPENSE;

                amount = amount.abs();

                LocalDate date =
                        LocalDate.parse(
                                dateCell.getStringCellValue(),
                                DATE_FORMATTER
                        );

                LocalDateTime transactionDate =
                        LocalDateTime.of(
                                date,
                                LocalTime.NOON
                        );

                transactions.add(
                        new ImportedTransaction(
                                title,
                                description,
                                amount,
                                transactionDate,
                                type
                        )
                );
            }
        }
        log.info(
                "Parsed {} Alfa-Bank transactions.",
                transactions.size()
        );
        return transactions;
    }
}