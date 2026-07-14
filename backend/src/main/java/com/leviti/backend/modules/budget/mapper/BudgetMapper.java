package com.leviti.backend.modules.budget.mapper;

import com.leviti.backend.modules.budget.dto.request.CreateBudgetRequest;
import com.leviti.backend.modules.budget.dto.request.UpdateBudgetRequest;
import com.leviti.backend.modules.budget.dto.response.BudgetResponse;
import com.leviti.backend.modules.budget.entity.BudgetEntity;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
        componentModel = "spring",
        nullValuePropertyMappingStrategy =
                NullValuePropertyMappingStrategy.IGNORE
)
public interface BudgetMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "spentAmount", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    BudgetEntity toEntity(
            CreateBudgetRequest request
    );

    @Mapping(
            target = "categoryId",
            source = "category.id"
    )
    @Mapping(
            target = "categoryName",
            source = "category.name"
    )
    @Mapping(
            target = "categoryIcon",
            source = "category.icon"
    )
    @Mapping(
            target = "categoryColor",
            source = "category.color"
    )
    BudgetResponse toResponse(
            BudgetEntity entity
    );

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "spentAmount", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    void updateEntity(
            UpdateBudgetRequest request,
            @MappingTarget BudgetEntity entity
    );
}