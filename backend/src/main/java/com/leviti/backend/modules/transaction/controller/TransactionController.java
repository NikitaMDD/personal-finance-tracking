package com.leviti.backend.modules.transaction.controller;

import com.leviti.backend.modules.analytics.dto.CategoryStatisticResponse;
import com.leviti.backend.modules.transaction.dto.request.CreateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.request.UpdateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.response.TransactionResponse;
import com.leviti.backend.modules.transaction.dto.response.TransactionStatisticResponse;
import com.leviti.backend.modules.transaction.service.TransactionService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TransactionResponse create(
            Principal principal,
            @Valid
            @RequestBody
            CreateTransactionRequest request
    ) {

        return transactionService.create(
                principal.getName(),
                request
        );

    }

    @GetMapping
    public List<TransactionResponse> findAll(
            Principal principal
    ) {

        return transactionService.findAll(
                principal.getName()
        );

    }

    @GetMapping("/statistics")
    public TransactionStatisticResponse statistics(
            Principal principal
    ) {

        return transactionService.getStatistics(
                principal.getName()
        );

    }

    @GetMapping("/statistics/categories")
    public List<CategoryStatisticResponse> categoryStatistics(
            Principal principal
    ) {

        return transactionService.getCategoryStatistics(
                principal.getName()
        );

    }

    @GetMapping("/{id:[0-9a-fA-F\\-]{36}}")
    public TransactionResponse findById(
            Principal principal,
            @PathVariable UUID id
    ) {

        return transactionService.findById(
                principal.getName(),
                id
        );

    }

    @PatchMapping("/{id:[0-9a-fA-F\\-]{36}}")
    public TransactionResponse update(
            Principal principal,
            @PathVariable UUID id,
            @Valid
            @RequestBody
            UpdateTransactionRequest request
    ) {

        return transactionService.update(
                principal.getName(),
                id,
                request
        );

    }

    @DeleteMapping("/{id:[0-9a-fA-F\\-]{36}}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(
            Principal principal,
            @PathVariable UUID id
    ) {

        transactionService.delete(
                principal.getName(),
                id
        );

    }

}