package com.leviti.backend.modules.settings.service;

import com.leviti.backend.modules.settings.dto.request.UpdateSettingsRequest;
import com.leviti.backend.modules.settings.dto.response.SettingsResponse;

public interface SettingsService {

    SettingsResponse get(
            String email
    );

    SettingsResponse update(
            String email,
            UpdateSettingsRequest request
    );

}