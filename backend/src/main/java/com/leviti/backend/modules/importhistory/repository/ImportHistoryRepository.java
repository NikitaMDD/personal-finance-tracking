package com.leviti.backend.modules.importhistory.repository;

import com.leviti.backend.modules.importhistory.entity.ImportHistoryEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ImportHistoryRepository
        extends JpaRepository<ImportHistoryEntity, UUID> {

    List<ImportHistoryEntity> findAllByBankConnection_User_Id(
            UUID userId
    );

}