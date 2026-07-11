package com.leviti.backend.modules.category.dto.response;

import com.leviti.backend.modules.category.entity.CategoryType;

import java.util.UUID;

public record CategoryResponse(
        UUID id,
        String name,
        String icon,
        String color,
        CategoryType type
) {}