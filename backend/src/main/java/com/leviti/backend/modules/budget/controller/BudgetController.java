package com.leviti.backend.modules.budget.controller;

import com.leviti.backend.modules.budget.dto.request.CreateBudgetRequest;
import com.leviti.backend.modules.budget.dto.request.UpdateBudgetRequest;
import com.leviti.backend.modules.budget.dto.response.BudgetResponse;
import com.leviti.backend.modules.budget.service.BudgetService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
public class BudgetController {

    private final BudgetService budgetService;

    @PostMapping
    public BudgetResponse create(
            Authentication authentication,
            @Valid @RequestBody CreateBudgetRequest request
    ) {
        return budgetService.create(
                authentication.getName(),
                request
        );
    }

    @GetMapping
    public List<BudgetResponse> findAll(
            Authentication authentication
    ) {
        return budgetService.findAll(
                authentication.getName()
        );
    }

    @GetMapping("/{id}")
    public BudgetResponse findById(
            Authentication authentication,
            @PathVariable UUID id
    ) {
        return budgetService.findById(
                authentication.getName(),
                id
        );
    }

    @PatchMapping("/{id}")
    public BudgetResponse update(
            Authentication authentication,
            @PathVariable UUID id,
            @RequestBody UpdateBudgetRequest request
    ) {
        return budgetService.update(
                authentication.getName(),
                id,
                request
        );
    }

    @DeleteMapping("/{id}")
    public void delete(
            Authentication authentication,
            @PathVariable UUID id
    ) {
        budgetService.delete(
                authentication.getName(),
                id
        );
    }
}