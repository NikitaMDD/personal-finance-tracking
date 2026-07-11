package com.leviti.backend.modules.bank.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record ConnectBankRequest(

        @NotNull
        UUID bankId,

        @NotBlank
        String externalAccountId

) {
}