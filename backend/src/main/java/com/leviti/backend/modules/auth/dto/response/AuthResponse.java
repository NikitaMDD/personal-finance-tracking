package com.leviti.backend.modules.auth.dto.response;

public record AuthResponse(
        String accessToken,
        String refreshToken
) {}