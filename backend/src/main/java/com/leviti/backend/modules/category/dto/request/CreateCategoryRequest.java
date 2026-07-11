package com.leviti.backend.modules.category.dto.request;
import com.leviti.backend.modules.category.entity.CategoryType;
import jakarta.validation.constraints.NotBlank;

public record CreateCategoryRequest(
        @NotBlank
        String name,
        @NotBlank
        String icon,
        @NotBlank
        String color,
        CategoryType type
) {}