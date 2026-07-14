package com.leviti.backend.modules.budget.service;

import com.leviti.backend.modules.budget.dto.request.CreateBudgetRequest;
import com.leviti.backend.modules.budget.dto.request.UpdateBudgetRequest;
import com.leviti.backend.modules.budget.dto.response.BudgetResponse;
import com.leviti.backend.modules.budget.entity.BudgetEntity;
import com.leviti.backend.modules.budget.mapper.BudgetMapper;
import com.leviti.backend.modules.budget.repository.BudgetRepository;

import com.leviti.backend.modules.category.entity.CategoryEntity;
import com.leviti.backend.modules.category.service.CategoryService;

import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;

import com.leviti.backend.shared.exception.ConflictException;
import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class BudgetServiceImpl
        implements BudgetService {

    private final BudgetRepository budgetRepository;

    private final BudgetMapper budgetMapper;

    private final UserService userService;

    private final CategoryService categoryService;

    @Override
    public BudgetResponse create(
            String email,
            CreateBudgetRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        CategoryEntity category =
                categoryService.findEntityById(
                        email,
                        request.categoryId()
                );

        if (budgetRepository.existsByCategory_IdAndUser_Id(
                category.getId(),
                user.getId()
        )) {

            throw new ConflictException(
                    "Budget for this category already exists."
            );

        }

        BudgetEntity entity =
                budgetMapper.toEntity(request);

        entity.setUser(user);

        entity.setCategory(category);

        entity.setSpentAmount(
                BigDecimal.ZERO
        );

        entity.setCreatedAt(
                OffsetDateTime.now()
        );

        return budgetMapper.toResponse(
                budgetRepository.save(entity)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public List<BudgetResponse> findAll(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return budgetRepository
                .findAllByUser_Id(
                        user.getId()
                )
                .stream()
                .map(
                        budgetMapper::toResponse
                )
                .toList();

    }

    @Override
    @Transactional(readOnly = true)
    public BudgetResponse findById(
            String email,
            UUID id
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return budgetMapper.toResponse(
                getBudget(
                        user.getId(),
                        id
                )
        );

    }

    @Override
    public BudgetResponse update(
            String email,
            UUID id,
            UpdateBudgetRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        BudgetEntity entity =
                getBudget(
                        user.getId(),
                        id
                );

        budgetMapper.updateEntity(
                request,
                entity
        );

        if (request.categoryId() != null) {

            CategoryEntity category =
                    categoryService.findEntityById(
                            email,
                            request.categoryId()
                    );

            entity.setCategory(
                    category
            );

        }

        return budgetMapper.toResponse(
                budgetRepository.save(entity)
        );

    }

    @Override
    public void delete(
            String email,
            UUID id
    ) {

        UserEntity user =
                userService.findByEmail(email);

        budgetRepository.delete(
                getBudget(
                        user.getId(),
                        id
                )
        );

    }

    private BudgetEntity getBudget(
            UUID userId,
            UUID budgetId
    ) {

        return budgetRepository
                .findByIdAndUser_Id(
                        budgetId,
                        userId
                )
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Budget not found."
                        )
                );

    }

}