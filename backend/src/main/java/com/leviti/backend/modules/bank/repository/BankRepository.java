package com.leviti.backend.modules.bank.repository;

import com.leviti.backend.modules.bank.entity.BankEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface BankRepository
        extends JpaRepository<BankEntity, UUID> {

    Optional<BankEntity> findByCode(
            String code
    );

}