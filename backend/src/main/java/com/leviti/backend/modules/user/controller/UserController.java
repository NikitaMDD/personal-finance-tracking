package com.leviti.backend.modules.user.controller;

import com.leviti.backend.modules.user.dto.request.UpdateUserRequest;
import com.leviti.backend.modules.user.dto.response.ProfileStatisticsResponse;
import com.leviti.backend.modules.user.dto.response.UserResponse;
import com.leviti.backend.modules.user.service.UserService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public UserResponse me(
            Principal principal
    ) {

        return userService.getCurrentUser(
                principal.getName()
        );

    }

    @GetMapping("/me/statistics")
    public ProfileStatisticsResponse statistics(
            Principal principal
    ) {

        return userService.getProfileStatistics(
                principal.getName()
        );

    }

    @PatchMapping("/me")
    public UserResponse update(
            Principal principal,
            @Valid
            @RequestBody
            UpdateUserRequest request
    ) {

        return userService.updateCurrentUser(
                principal.getName(),
                request
        );

    }

}