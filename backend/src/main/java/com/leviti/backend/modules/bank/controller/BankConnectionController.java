package com.leviti.backend.modules.bank.controller;

import com.leviti.backend.modules.bank.dto.request.ConnectBankRequest;
import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;
import com.leviti.backend.modules.bank.service.BankConnectionService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/bank-connections")
@RequiredArgsConstructor
public class BankConnectionController {

    private final BankConnectionService bankConnectionService;

    @PostMapping
    public BankConnectionResponse connect(

            Principal principal,

            @RequestBody
            @Valid
            ConnectBankRequest request

    ) {

        return bankConnectionService.connect(
                principal.getName(),
                request
        );

    }

    @GetMapping
    public List<BankConnectionResponse> findAll(

            Principal principal

    ) {

        return bankConnectionService.findAll(
                principal.getName()
        );

    }

    @DeleteMapping("/{id}")
    public void disconnect(

            Principal principal,

            @PathVariable
            UUID id

    ) {

        bankConnectionService.disconnect(
                principal.getName(),
                id
        );

    }

}