package com.leviti.backend.modules.settings.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record UpdateSettingsRequest(

        @NotBlank
        String theme,

        @NotBlank
        String language,

        @NotBlank
        String currency,

        @Min(1)
        @Max(31)
        Integer monthStartDay,
        Boolean emailNotifications,
        Boolean pushNotifications,
        Boolean budgetNotifications
) {}