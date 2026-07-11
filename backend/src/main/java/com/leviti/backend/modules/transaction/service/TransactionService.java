package com.leviti.backend.modules.transaction.service;

import com.leviti.backend.modules.transaction.dto.request.CreateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.request.UpdateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.response.TransactionResponse;

import java.util.List;
import java.util.UUID;

public interface TransactionService {

    TransactionResponse create(
            String email,
            CreateTransactionRequest request
    );

    List<TransactionResponse> findAll(
            String email
    );

    TransactionResponse findById(
            String email,
            UUID id
    );

    TransactionResponse update(
            String email,
            UUID id,
            UpdateTransactionRequest request
    );

    void delete(
            String email,
            UUID id
    );

}