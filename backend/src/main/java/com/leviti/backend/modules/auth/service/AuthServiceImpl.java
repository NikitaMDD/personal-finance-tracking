package com.leviti.backend.modules.auth.service;

import com.leviti.backend.modules.auth.dto.request.LoginRequest;
import com.leviti.backend.modules.auth.dto.request.RegisterRequest;
import com.leviti.backend.modules.auth.dto.response.AuthResponse;
import com.leviti.backend.modules.auth.jwt.JwtService;
import com.leviti.backend.modules.user.dto.request.CreateUserRequest;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.service.UserService;

import com.leviti.backend.shared.exception.UnauthorizedException;
import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public void register(RegisterRequest request) {

        CreateUserRequest createRequest =
                new CreateUserRequest(
                        request.email(),
                        passwordEncoder.encode(request.password()),
                        request.firstName(),
                        request.lastName(),
                        request.phone()
                );
        userService.create(createRequest);
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        UserEntity user =
                userService.findByEmail(
                        request.email()
                );

        if (!passwordEncoder.matches(
                request.password(),
                user.getPassword()
        )) {

            throw new UnauthorizedException(
                    "Invalid email or password."
            );

        }

        String accessToken =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(
                accessToken,
                null
        );

    }
}