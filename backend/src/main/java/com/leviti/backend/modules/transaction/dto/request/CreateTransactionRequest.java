package com.leviti.backend.modules.transaction.dto.request;

import com.leviti.backend.modules.transaction.entity.TransactionType;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record CreateTransactionRequest(

        @NotNull
        UUID bankConnectionId,

        @NotNull
        UUID categoryId,

        @NotBlank
        String title,

        String description,

        @NotNull
        @DecimalMin("0.01")
        BigDecimal amount,

        @NotNull
        TransactionType type,

        @NotNull
        LocalDateTime transactionDate

) {}