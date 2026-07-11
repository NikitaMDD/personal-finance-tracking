package com.leviti.backend.modules.auth.service;

import com.leviti.backend.modules.auth.dto.request.LoginRequest;
import com.leviti.backend.modules.auth.dto.request.RegisterRequest;
import com.leviti.backend.modules.auth.dto.response.AuthResponse;

public interface AuthService {
    void register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}