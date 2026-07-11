package com.leviti.backend.modules.user.mapper;

import com.leviti.backend.modules.user.dto.request.CreateUserRequest;
import com.leviti.backend.modules.user.dto.request.UpdateUserRequest;
import com.leviti.backend.modules.user.dto.response.UserResponse;
import com.leviti.backend.modules.user.entity.UserEntity;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserEntity toEntity(CreateUserRequest request);
    UserResponse toResponse(UserEntity entity);
    void updateEntity(
            UpdateUserRequest request,
            @MappingTarget UserEntity entity
    );
}