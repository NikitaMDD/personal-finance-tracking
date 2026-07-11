package com.leviti.backend.modules.category.repository;

import com.leviti.backend.modules.category.entity.CategoryEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CategoryRepository
        extends JpaRepository<CategoryEntity, UUID> {

    List<CategoryEntity> findAllByUser_Id(
            UUID userId
    );

    Optional<CategoryEntity> findByIdAndUser_Id(
            UUID id,
            UUID userId
    );

    boolean existsByNameAndUser_Id(
            String name,
            UUID userId
    );

}