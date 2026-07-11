package com.leviti.backend.modules.budget.repository;

import com.leviti.backend.modules.budget.entity.BudgetEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BudgetRepository
        extends JpaRepository<BudgetEntity, UUID> {

    List<BudgetEntity> findAllByUser_Id(UUID userId);

    Optional<BudgetEntity> findByIdAndUser_Id(
            UUID id,
            UUID userId
    );

    boolean existsByNameAndUser_Id(
            String name,
            UUID userId
    );
}