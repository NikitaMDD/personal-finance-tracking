package com.leviti.backend.modules.budget.mapper;

import com.leviti.backend.modules.budget.dto.request.CreateBudgetRequest;
import com.leviti.backend.modules.budget.dto.request.UpdateBudgetRequest;
import com.leviti.backend.modules.budget.dto.response.BudgetResponse;
import com.leviti.backend.modules.budget.entity.BudgetEntity;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
        componentModel = "spring",
        nullValuePropertyMappingStrategy =
                NullValuePropertyMappingStrategy.IGNORE
)
public interface BudgetMapper {

    BudgetEntity toEntity(CreateBudgetRequest request);

    BudgetResponse toResponse(BudgetEntity entity);

    void updateEntity(
            UpdateBudgetRequest request,
            @MappingTarget BudgetEntity entity
    );
}