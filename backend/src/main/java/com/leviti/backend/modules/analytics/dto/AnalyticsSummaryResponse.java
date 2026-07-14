package com.leviti.backend.modules.analytics.dto;

import java.math.BigDecimal;

public record AnalyticsSummaryResponse(
        BigDecimal income,
        BigDecimal expense,
        BigDecimal balance,
        Integer operations
) {}