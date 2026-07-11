package com.leviti.backend.modules.settings.controller;

import com.leviti.backend.modules.settings.dto.request.UpdateSettingsRequest;
import com.leviti.backend.modules.settings.dto.response.SettingsResponse;
import com.leviti.backend.modules.settings.service.SettingsService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class SettingsController {

    private final SettingsService settingsService;

    @GetMapping
    public SettingsResponse get(
            Principal principal
    ) {

        return settingsService.get(
                principal.getName()
        );

    }

    @PutMapping
    public SettingsResponse update(

            Principal principal,

            @Valid
            @RequestBody
            UpdateSettingsRequest request

    ) {

        return settingsService.update(
                principal.getName(),
                request
        );

    }

}