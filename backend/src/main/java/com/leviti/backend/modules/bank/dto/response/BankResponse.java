package com.leviti.backend.modules.bank.dto.response;

import java.util.UUID;

public record BankResponse(
        UUID id,
        String code,
        String name,
        String logo,
        String color
) {
}