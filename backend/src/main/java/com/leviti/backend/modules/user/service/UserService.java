package com.leviti.backend.modules.user.service;

import com.leviti.backend.modules.user.dto.request.CreateUserRequest;
import com.leviti.backend.modules.user.dto.request.UpdateUserRequest;
import com.leviti.backend.modules.user.dto.response.ProfileStatisticsResponse;
import com.leviti.backend.modules.user.dto.response.UserResponse;
import com.leviti.backend.modules.user.entity.UserEntity;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserResponse create(
            CreateUserRequest request
    );

    List<UserResponse> findAll();

    UserResponse findByIdResponse(
            UUID id
    );

    UserEntity findById(
            UUID id
    );

    UserEntity findByEmail(
            String email
    );

    UserResponse getCurrentUser(
            String email
    );

    ProfileStatisticsResponse getProfileStatistics(
            String email
    );

    UserResponse updateCurrentUser(
            String email,
            UpdateUserRequest request
    );

    UserResponse update(
            UUID id,
            UpdateUserRequest request
    );

    void delete(
            UUID id
    );

}