package com.leviti.backend.modules.budget.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public record BudgetResponse(

        UUID id,

        String name,

        BigDecimal limitAmount,

        BigDecimal spentAmount,

        String period,

        LocalDate startDate,

        LocalDate endDate

) {
}