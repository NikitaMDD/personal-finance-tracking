package com.leviti.backend.modules.bank.repository;

import com.leviti.backend.modules.bank.entity.BankConnectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BankConnectionRepository
        extends JpaRepository<BankConnectionEntity, UUID> {

    List<BankConnectionEntity> findAllByUser_Id(
            UUID userId
    );

    Optional<BankConnectionEntity> findByIdAndUser_Id(
            UUID id,
            UUID userId
    );

    boolean existsByUser_IdAndBank_Id(
            UUID userId,
            UUID bankId
    );

}