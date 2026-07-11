package com.leviti.backend.modules.budget.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;

public record UpdateBudgetRequest(

        String name,

        BigDecimal limitAmount,

        String period,

        LocalDate startDate,

        LocalDate endDate

) {
}