package com.leviti.backend.modules.settings.service;

import com.leviti.backend.modules.settings.dto.request.UpdateSettingsRequest;
import com.leviti.backend.modules.settings.dto.response.SettingsResponse;
import com.leviti.backend.modules.settings.entity.SettingsEntity;
import com.leviti.backend.modules.settings.mapper.SettingsMapper;
import com.leviti.backend.modules.settings.repository.SettingsRepository;
import com.leviti.backend.modules.user.service.UserService;
import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class SettingsServiceImpl
        implements SettingsService {

    private final SettingsRepository settingsRepository;
    private final SettingsMapper settingsMapper;
    private final UserService userService;

    @Override
    @Transactional(readOnly = true)
    public SettingsResponse get(
            String email
    ) {
        SettingsEntity settings =
                settingsRepository
                        .findByUser_Email(email)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Settings not found."
                                )
                        );

        return settingsMapper.toResponse(settings);
    }

    @Override
    public SettingsResponse update(
            String email,
            UpdateSettingsRequest request
    ) {
        SettingsEntity settings =
                settingsRepository
                        .findByUser_Email(email)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Settings not found."
                                )
                        );

        settingsMapper.updateEntity(
                request,
                settings
        );

        return settingsMapper.toResponse(
                settingsRepository.save(settings)
        );
    }
}