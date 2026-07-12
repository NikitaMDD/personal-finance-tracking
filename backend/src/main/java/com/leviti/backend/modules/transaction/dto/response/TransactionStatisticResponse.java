package com.leviti.backend.modules.transaction.dto.response;

import java.math.BigDecimal;

public record TransactionStatisticResponse(
        BigDecimal income,
        BigDecimal expense,
        BigDecimal balance,
        Integer savings
) {
}