package com.leviti.backend.modules.budget.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record CreateBudgetRequest(

        @NotBlank
        String name,

        @NotNull
        BigDecimal limitAmount,

        @NotBlank
        String period,

        @NotNull
        LocalDate startDate,

        @NotNull
        LocalDate endDate

) {
}