package com.leviti.backend.modules.category.mapper;

import com.leviti.backend.modules.category.dto.request.CreateCategoryRequest;
import com.leviti.backend.modules.category.dto.request.UpdateCategoryRequest;
import com.leviti.backend.modules.category.dto.response.CategoryResponse;
import com.leviti.backend.modules.category.entity.CategoryEntity;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryEntity toEntity(
            CreateCategoryRequest request
    );
    CategoryResponse toResponse(
            CategoryEntity entity
    );
    void updateEntity(
            UpdateCategoryRequest request,
            @MappingTarget CategoryEntity entity
    );
}