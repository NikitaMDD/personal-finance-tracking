package com.leviti.backend.modules.analytics.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record MonthlyStatisticResponse(
        LocalDate month,
        BigDecimal income,
        BigDecimal expense
) {}