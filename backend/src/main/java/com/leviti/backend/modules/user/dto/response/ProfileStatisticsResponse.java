package com.leviti.backend.modules.user.dto.response;

import java.math.BigDecimal;

public record ProfileStatisticsResponse(

        long accounts,

        long categories,

        long budgets,

        long operations,

        BigDecimal income,

        BigDecimal expense,

        BigDecimal balance

) {
}