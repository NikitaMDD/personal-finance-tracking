package com.leviti.backend.modules.user.dto.response;
import java.util.UUID;

public record UserResponse(

        UUID id,

        String email,

        String firstName,

        String lastName,

        String phone,

        String avatarUrl,

        String role,

        boolean premium

) {
}