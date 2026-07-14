package com.leviti.backend.modules.budget.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public record UpdateBudgetRequest(
        UUID categoryId,
        BigDecimal limitAmount,
        String period,
        LocalDate startDate,
        LocalDate endDate
) {
}