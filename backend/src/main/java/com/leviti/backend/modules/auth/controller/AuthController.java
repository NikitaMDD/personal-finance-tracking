package com.leviti.backend.modules.auth.controller;

import com.leviti.backend.modules.auth.dto.request.LoginRequest;
import com.leviti.backend.modules.auth.dto.request.RegisterRequest;
import com.leviti.backend.modules.auth.dto.response.AuthResponse;
import com.leviti.backend.modules.auth.service.AuthService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public void register(
        @RequestBody
        @Valid
        RegisterRequest request
    ) {
        authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody
            @Valid
            LoginRequest request
    ) {
        return authService.login(request);
    }
}