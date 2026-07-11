package com.leviti.backend.modules.bank.service;

import com.leviti.backend.modules.bank.dto.response.BankResponse;
import com.leviti.backend.modules.bank.entity.BankEntity;
import com.leviti.backend.modules.bank.mapper.BankMapper;
import com.leviti.backend.modules.bank.repository.BankRepository;
import com.leviti.backend.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BankServiceImpl implements BankService {

    private final BankRepository bankRepository;
    private final BankMapper bankMapper;

    @Override
    public List<BankResponse> findAll() {

        return bankRepository.findAll()
                .stream()
                .map(bankMapper::toResponse)
                .toList();

    }

    @Override
    public BankResponse findById(
            UUID id
    ) {

        BankEntity bank =
                bankRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Bank not found."
                                )
                        );

        return bankMapper.toResponse(bank);

    }

    @Override
    public BankEntity getEntityById(
            UUID id
    ) {
        return bankRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Bank not found."
                        )
                );
    }

}