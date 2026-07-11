package com.leviti.backend.modules.bank.service;

import com.leviti.backend.modules.bank.dto.request.ConnectBankRequest;
import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;

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

    void disconnect(
            String email,
            UUID connectionId
    );

}