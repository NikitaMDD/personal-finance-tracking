package com.leviti.backend.modules.settings.repository;

import com.leviti.backend.modules.settings.entity.SettingsEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SettingsRepository
        extends JpaRepository<SettingsEntity, UUID> {

    Optional<SettingsEntity> findByUser_Email(
            String email
    );

}