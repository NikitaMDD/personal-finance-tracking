package com.leviti.backend.modules.bank.service;

import com.leviti.backend.modules.bank.dto.response.DashboardAccountResponse;
import com.leviti.backend.modules.bank.entity.BankEntity;
import com.leviti.backend.modules.bank.mapper.BankConnectionMapper;
import com.leviti.backend.modules.bank.repository.BankConnectionRepository;
import com.leviti.backend.modules.bank.dto.request.ConnectBankRequest;
import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;
import com.leviti.backend.modules.bank.entity.BankConnectionEntity;
import com.leviti.backend.modules.bank.service.BankService;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;
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
public class BankConnectionServiceImpl
        implements BankConnectionService {

    private final BankConnectionRepository bankConnectionRepository;
    private final BankConnectionMapper bankConnectionMapper;
    private final TransactionRepository transactionRepository;
    private final BankService bankService;
    private final UserService userService;

    @Override
    public BankConnectionResponse connect(
            String email,
            ConnectBankRequest request
    ) {

        UserEntity user =
                userService.findByEmail(email);

        BankEntity bank =
                bankService.getEntityById(request.bankId());

        BankConnectionEntity entity =
                BankConnectionEntity.builder()
                        .user(user)
                        .bank(bank)
                        .externalAccountId(request.externalAccountId())
                        .connected(true)
                        .connectedAt(OffsetDateTime.now())
                        .build();

        return bankConnectionMapper.toResponse(
                bankConnectionRepository.save(entity)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public List<BankConnectionResponse> findAll(
            String email
    ) {

        UserEntity user =
                userService.findByEmail(email);

        return bankConnectionRepository
                .findAllByUser_Id(user.getId())
                .stream()
                .map(bankConnectionMapper::toResponse)
                .toList();

    }

    @Override
    public void disconnect(
            String email,
            UUID id
    ) {

        UserEntity user =
                userService.findByEmail(email);

        BankConnectionEntity entity =
                bankConnectionRepository
                        .findByIdAndUser_Id(
                                id,
                                user.getId()
                        )
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Bank connection not found."
                                )
                        );

        bankConnectionRepository.delete(entity);

    }

    @Override
    @Transactional(readOnly = true)
    public List<DashboardAccountResponse> getDashboardAccounts(
            String email
    ) {

        UserEntity user = userService.findByEmail(email);

        return bankConnectionRepository
                .findAllByUser_Id(user.getId())
                .stream()
                .map(connection -> {

                    BigDecimal balance =
                            transactionRepository
                                    .getBalanceByBankConnection(
                                            connection.getId()
                                    );

                    String lastDigits = null;

                    if (connection.getExternalAccountId() != null &&
                            connection.getExternalAccountId().length() >= 4) {

                        lastDigits =
                                connection
                                        .getExternalAccountId()
                                        .substring(
                                                connection
                                                        .getExternalAccountId()
                                                        .length() - 4
                                        );
                    }

                    return new DashboardAccountResponse(
                            connection.getId(),
                            connection.getBank().getName(),
                            connection.getBank()
                                    .getCode()
                                    .name()
                                    .toLowerCase(),
                            connection.getBank().getLogo(),
                            connection.getBank().getColor(),
                            balance,
                            "RUB",
                            lastDigits,
                            false
                    );
                })
                .toList();
    }
}