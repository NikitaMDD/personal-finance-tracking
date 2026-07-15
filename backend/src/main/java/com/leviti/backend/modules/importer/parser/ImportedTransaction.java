package com.leviti.backend.modules.importer.parser;

import com.leviti.backend.modules.transaction.entity.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ImportedTransaction(
        String title,
        String description,
        String category,
        BigDecimal amount,
        LocalDateTime transactionDate,
        TransactionType type
) {
}