package com.leviti.backend.modules.settings.mapper;

import com.leviti.backend.modules.settings.dto.request.UpdateSettingsRequest;
import com.leviti.backend.modules.settings.dto.response.SettingsResponse;
import com.leviti.backend.modules.settings.entity.SettingsEntity;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SettingsMapper {
    SettingsResponse toResponse(
            SettingsEntity entity
    );
    void updateEntity(
            UpdateSettingsRequest request,
            @MappingTarget SettingsEntity entity
    );
}