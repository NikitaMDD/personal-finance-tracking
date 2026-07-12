package com.leviti.backend.modules.bank.service;

import com.leviti.backend.modules.bank.dto.request.ConnectBankRequest;
import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;
import com.leviti.backend.modules.bank.dto.response.DashboardAccountResponse;
import com.leviti.backend.modules.bank.entity.BankConnectionEntity;

import java.util.List;
import java.util.UUID;

public interface BankConnectionService {

    BankConnectionResponse connect(
            String email,
            ConnectBankRequest request
    );

    List<BankConnectionResponse> findAll(
            String email
    );

    List<DashboardAccountResponse> getDashboardAccounts(
            String email
    );

    BankConnectionEntity findEntityById(
            String email,
            UUID id
    );

    void disconnect(
            String email,
            UUID connectionId
    );

}