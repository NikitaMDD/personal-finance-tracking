package com.leviti.backend.modules.transaction.dto.response;

import com.leviti.backend.modules.transaction.entity.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record TransactionResponse(

        UUID id,

        UUID categoryId,

        String categoryName,

        String title,

        String description,

        BigDecimal amount,

        TransactionType type,

        LocalDateTime transactionDate

) {}