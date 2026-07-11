package com.leviti.backend.modules.bank.dto.response;

import java.time.OffsetDateTime;
import java.util.UUID;

public record BankConnectionResponse(

        UUID id,

        UUID bankId,

        String bankName,

        String logo,

        String color,

        String externalAccountId,

        Boolean connected,

        OffsetDateTime connectedAt

) {
}