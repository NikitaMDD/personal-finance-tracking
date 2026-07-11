package com.leviti.backend.modules.settings.dto.response;

public record SettingsResponse(
        String theme,
        String language,
        String currency,
        Integer monthStartDay,
        Boolean emailNotifications,
        Boolean pushNotifications,
        Boolean budgetNotifications
) {}