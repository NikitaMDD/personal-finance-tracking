package com.leviti.backend.modules.bank.controller;

import com.leviti.backend.modules.bank.dto.response.BankResponse;
import com.leviti.backend.modules.bank.service.BankService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/banks")
@RequiredArgsConstructor
public class BankController {

    private final BankService bankService;

    @GetMapping
    public List<BankResponse> findAll() {

        return bankService.findAll();

    }

    @GetMapping("/{id}")
    public BankResponse findById(
            @PathVariable
            UUID id
    ) {

        return bankService.findById(id);

    }

}