package com.leviti.backend.modules.category.service;

import com.leviti.backend.modules.category.dto.request.CreateCategoryRequest;
import com.leviti.backend.modules.category.dto.request.UpdateCategoryRequest;
import com.leviti.backend.modules.category.dto.response.CategoryResponse;
import com.leviti.backend.modules.category.entity.CategoryEntity;

import java.util.List;
import java.util.UUID;

public interface CategoryService {

    CategoryResponse create(
            String email,
            CreateCategoryRequest request
    );

    List<CategoryResponse> findAll(
            String email
    );

    CategoryResponse findById(
            String email,
            UUID id
    );

    CategoryResponse update(
            String email,
            UUID id,
            UpdateCategoryRequest request
    );

    CategoryEntity findEntityById(
            String email,
            UUID categoryId
    );

    void delete(
            String email,
            UUID id
    );

}