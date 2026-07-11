package com.leviti.backend.modules.transaction.service;

import com.leviti.backend.modules.category.entity.CategoryEntity;
import com.leviti.backend.modules.category.service.CategoryService;
import com.leviti.backend.modules.transaction.dto.request.CreateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.request.UpdateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.response.TransactionResponse;
import com.leviti.backend.modules.transaction.entity.TransactionEntity;
import com.leviti.backend.modules.transaction.mapper.TransactionMapper;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;
import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class TransactionServiceImpl
        implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;
    private final UserService userService;
    private final CategoryService categoryService;

    @Override
    public TransactionResponse create(
            String email,
            CreateTransactionRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        CategoryEntity category =
                categoryService.findEntityById(
                        email,
                        request.categoryId()
                );

        TransactionEntity entity =
                transactionMapper.toEntity(request);

        entity.setUser(user);

        entity.setCategory(category);

        return transactionMapper.toResponse(
                transactionRepository.save(entity)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public List<TransactionResponse> findAll(
            String email
    ) {
        UserEntity user =
                userService.findByEmail(email);

        return transactionRepository
                .findAllByUser_Id(user.getId())
                .stream()
                .map(transactionMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public TransactionResponse findById(
            String email,
            UUID id
    ) {
        UserEntity user =
                userService.findByEmail(email);

        return transactionMapper.toResponse(
                getTransaction(
                        user.getId(),
                        id
                )
        );
    }

    @Override
    public TransactionResponse update(
            String email,
            UUID id,
            UpdateTransactionRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        TransactionEntity entity =
                getTransaction(
                        user.getId(),
                        id
                );

        CategoryEntity category =
                categoryService.findEntityById(
                        email,
                        request.categoryId()
                );

        transactionMapper.updateEntity(
                request,
                entity
        );

        entity.setCategory(category);

        return transactionMapper.toResponse(
                transactionRepository.save(entity)
        );
    }

    @Override
    public void delete(
            String email,
            UUID id
    ) {
        UserEntity user =
                userService.findByEmail(email);

        transactionRepository.delete(
                getTransaction(
                        user.getId(),
                        id
                )
        );
    }

    private TransactionEntity getTransaction(
            UUID userId,
            UUID transactionId
    ) {
        return transactionRepository
                .findByIdAndUser_Id(
                        transactionId,
                        userId
                )
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Transaction not found."
                        )
                );
    }
}