package com.leviti.backend.modules.bank.dto.response;

import java.math.BigDecimal;
import java.util.UUID;

public record DashboardAccountResponse(
        UUID id,
        String title,
        String bankCode,
        String logo,
        String color,
        BigDecimal balance,
        String currency,
        String lastCardNumbers,
        Boolean isMain
) {
}