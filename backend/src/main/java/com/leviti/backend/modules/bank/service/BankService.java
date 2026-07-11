package com.leviti.backend.modules.bank.service;

import com.leviti.backend.modules.bank.dto.response.BankResponse;
import com.leviti.backend.modules.bank.entity.BankEntity;

import java.util.List;
import java.util.UUID;

public interface BankService {

    List<BankResponse> findAll();

    BankResponse findById(UUID id);

    BankEntity getEntityById(UUID id);

}