package com.leviti.backend.modules.bank.controller;

import com.leviti.backend.modules.auth.security.CustomUserDetails;
import com.leviti.backend.modules.bank.dto.request.ConnectBankRequest;
import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;
import com.leviti.backend.modules.bank.dto.response.DashboardAccountResponse;
import com.leviti.backend.modules.bank.service.BankConnectionService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/bank-connections")
@RequiredArgsConstructor
public class BankConnectionController {

    private final BankConnectionService bankConnectionService;

    @PostMapping
    public BankConnectionResponse connect(
            @AuthenticationPrincipal
            CustomUserDetails user,

            @Valid
            @RequestBody
            ConnectBankRequest request
    ) {
        return bankConnectionService.connect(
                user.getUsername(),
                request
        );
    }

    @GetMapping
    public List<BankConnectionResponse> findAll(
            @AuthenticationPrincipal
            CustomUserDetails user
    ) {
        return bankConnectionService.findAll(
                user.getUsername()
        );
    }

    @GetMapping("/dashboard")
    public List<DashboardAccountResponse> getDashboardAccounts(
            @AuthenticationPrincipal
            CustomUserDetails user
    ) {
        return bankConnectionService.getDashboardAccounts(
                user.getUsername()
        );
    }

    @DeleteMapping("/{id}")
    public void disconnect(
            @AuthenticationPrincipal
            CustomUserDetails user,

            @PathVariable
            UUID id
    ) {
        bankConnectionService.disconnect(
                user.getUsername(),
                id
        );
    }
}