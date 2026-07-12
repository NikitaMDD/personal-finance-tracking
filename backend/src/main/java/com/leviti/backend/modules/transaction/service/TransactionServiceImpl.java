package com.leviti.backend.modules.transaction.service;

import com.leviti.backend.modules.analytics.dto.CategoryStatisticResponse;
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
import com.leviti.backend.modules.transaction.dto.response.TransactionStatisticResponse;

import java.math.BigDecimal;
import java.math.RoundingMode;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.leviti.backend.modules.bank.entity.BankConnectionEntity;
import com.leviti.backend.modules.bank.service.BankConnectionService;

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
    private final BankConnectionService bankConnectionService;

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

        BankConnectionEntity bankConnection =
                bankConnectionService.findEntityById(
                        email,
                        request.bankConnectionId()
                );

        TransactionEntity entity =
                transactionMapper.toEntity(request);

        entity.setUser(user);
        entity.setCategory(category);
        entity.setBankConnection(bankConnection);

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

        BankConnectionEntity bankConnection =
                bankConnectionService.findEntityById(
                        email,
                        request.bankConnectionId()
                );

        transactionMapper.updateEntity(
                request,
                entity
        );

        entity.setCategory(category);
        entity.setBankConnection(bankConnection);

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

    @Override
    @Transactional(readOnly = true)
    public TransactionStatisticResponse getStatistics(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        BigDecimal income =
                transactionRepository.getIncome(
                        user.getId()
                );

        BigDecimal expense =
                transactionRepository.getExpense(
                        user.getId()
                );

        BigDecimal balance =
                income.subtract(expense);

        int savings = 0;

        if (income.compareTo(BigDecimal.ZERO) > 0) {

            savings = balance
                    .multiply(
                            BigDecimal.valueOf(100)
                    )
                    .divide(
                            income,
                            0,
                            RoundingMode.HALF_UP
                    )
                    .intValue();
        }

        return new TransactionStatisticResponse(
                income,
                expense,
                balance,
                savings
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<CategoryStatisticResponse> getCategoryStatistics(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return transactionRepository
                .getCategoryStatistic(
                        user.getId()
                )
                .stream()
                .map(row -> new CategoryStatisticResponse(
                        (String) row[0],
                        (BigDecimal) row[1]
                ))
                .toList();
    }
}