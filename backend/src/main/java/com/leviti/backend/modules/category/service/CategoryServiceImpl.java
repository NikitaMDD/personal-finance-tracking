package com.leviti.backend.modules.category.service;

import com.leviti.backend.modules.category.dto.request.CreateCategoryRequest;
import com.leviti.backend.modules.category.dto.request.UpdateCategoryRequest;
import com.leviti.backend.modules.category.dto.response.CategoryResponse;
import com.leviti.backend.modules.category.entity.CategoryEntity;
import com.leviti.backend.modules.category.mapper.CategoryMapper;
import com.leviti.backend.modules.category.repository.CategoryRepository;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;
import com.leviti.backend.shared.exception.ConflictException;
import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    private final UserService userService;

    @Override
    public CategoryResponse create(
            String email,
            CreateCategoryRequest request
    ) {

        UserEntity user = userService.findByEmail(email);

        if (categoryRepository.existsByNameAndUser_Id(
                request.name(),
                user.getId()
        )) {

            throw new ConflictException(
                    "Category already exists."
            );

        }

        CategoryEntity entity =
                categoryMapper.toEntity(request);

        entity.setUser(user);

        return categoryMapper.toResponse(
                categoryRepository.save(entity)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public List<CategoryResponse> findAll(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return categoryRepository
                .findAllByUser_Id(user.getId())
                .stream()
                .map(categoryMapper::toResponse)
                .toList();

    }

    @Override
    @Transactional(readOnly = true)
    public CategoryResponse findById(
            String email,
            UUID categoryId
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return categoryMapper.toResponse(
                getCategory(user.getId(), categoryId)
        );

    }

    @Override
    public CategoryResponse update(
            String email,
            UUID categoryId,
            UpdateCategoryRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        CategoryEntity entity =
                getCategory(user.getId(), categoryId);

        categoryMapper.updateEntity(
                request,
                entity
        );

        return categoryMapper.toResponse(
                categoryRepository.save(entity)
        );

    }

    @Override
    public void delete(
            String email,
            UUID categoryId
    ) {

        UserEntity user =
                userService.findByEmail(email);

        categoryRepository.delete(
                getCategory(user.getId(), categoryId)
        );
    }

    @Override
    @Transactional(readOnly = true)
    public CategoryEntity findEntityById(
            String email,
            UUID categoryId
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return getCategory(
                user.getId(),
                categoryId
        );

    }

    private CategoryEntity getCategory(
            UUID userId,
            UUID categoryId
    ) {
        return categoryRepository
                .findByIdAndUser_Id(
                        categoryId,
                        userId
                )
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Category not found."
                        )
                );
    }
}