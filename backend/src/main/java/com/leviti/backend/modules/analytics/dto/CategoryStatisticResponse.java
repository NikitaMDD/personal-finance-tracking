package com.leviti.backend.modules.analytics.dto;
import java.math.BigDecimal;

public record CategoryStatisticResponse(
        String category,
        BigDecimal amount
) {}