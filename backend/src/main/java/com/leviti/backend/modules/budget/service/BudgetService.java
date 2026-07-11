package com.leviti.backend.modules.budget.service;

import com.leviti.backend.modules.budget.dto.request.CreateBudgetRequest;
import com.leviti.backend.modules.budget.dto.request.UpdateBudgetRequest;
import com.leviti.backend.modules.budget.dto.response.BudgetResponse;

import java.util.List;
import java.util.UUID;

public interface BudgetService {

    BudgetResponse create(
            String email,
            CreateBudgetRequest request
    );

    List<BudgetResponse> findAll(
            String email
    );

    BudgetResponse findById(
            String email,
            UUID id
    );

    BudgetResponse update(
            String email,
            UUID id,
            UpdateBudgetRequest request
    );

    void delete(
            String email,
            UUID id
    );
}