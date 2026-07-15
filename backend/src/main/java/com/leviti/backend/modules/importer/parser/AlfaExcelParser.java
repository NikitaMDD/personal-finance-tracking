package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.bank.enums.BankCode;
import com.leviti.backend.modules.importer.util.MoneyParser;
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
public class AlfaExcelParser
        implements StatementParser {

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

            int firstTransactionRow =
                    findFirstTransactionRow(
                            sheet
                    );

            for (
                    int i = firstTransactionRow;
                    i <= sheet.getLastRowNum();
                    i++
            ) {

                Row row =
                        sheet.getRow(i);

                if (row == null) {
                    continue;
                }

                Cell dateCell =
                        row.getCell(
                                0,
                                Row.MissingCellPolicy.CREATE_NULL_AS_BLANK
                        );

                Cell categoryCell =
                        row.getCell(
                                4,
                                Row.MissingCellPolicy.CREATE_NULL_AS_BLANK
                        );

                Cell descriptionCell =
                        row.getCell(
                                11,
                                Row.MissingCellPolicy.CREATE_NULL_AS_BLANK
                        );

                Cell amountCell =
                        row.getCell(
                                12,
                                Row.MissingCellPolicy.CREATE_NULL_AS_BLANK
                        );

                String description =
                        descriptionCell
                                .toString()
                                .trim();

                if (description.isBlank()) {
                    continue;
                }

                String category =
                        categoryCell
                                .toString()
                                .trim();

                String title =
                        TransactionTitleExtractor.extract(
                                category,
                                description
                        );

                BigDecimal amount =
                        MoneyParser.parse(
                                amountCell.toString()
                        );

                TransactionType type =
                        amount.signum() >= 0
                                ? TransactionType.INCOME
                                : TransactionType.EXPENSE;

                amount =
                        amount.abs();

                LocalDate date =
                        LocalDate.parse(
                                dateCell.toString().trim(),
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

                                category,

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

    private int findFirstTransactionRow(
            Sheet sheet
    ) {

        for (
                int i = 0;
                i <= sheet.getLastRowNum();
                i++
        ) {

            Row row =
                    sheet.getRow(i);

            if (row == null) {
                continue;
            }

            Cell cell =
                    row.getCell(
                            0,
                            Row.MissingCellPolicy.CREATE_NULL_AS_BLANK
                    );

            if (
                    cell.getCellType() != CellType.STRING
            ) {
                continue;
            }

            if (
                    "Дата операции".equals(
                            cell.toString().trim()
                    )
            ) {

                return i + 1;

            }

        }

        throw new IllegalArgumentException(
                "Не удалось найти таблицу операций в выписке Альфа-Банка."
        );

    }

}