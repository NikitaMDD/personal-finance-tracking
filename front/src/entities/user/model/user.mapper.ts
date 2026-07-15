import type {
    UserResponse,
} from "./user-response.types";

import type {
    UpdateUserRequest,
} from "./update-user-request.types";

import type {
    UserProfile,
} from "@/entities/profile/model";

import type {
    ProfileFormValues,
} from "@/pages/profile/forms/profile.schema";

export function toUser(
    user: UserResponse,
): UserProfile {

    return {

        id: user.id,

        firstName: user.firstName,

        lastName: user.lastName,

        email: user.email,

        phone: user.phone ?? "",

        avatarUrl: user.avatarUrl ?? undefined,

        role: "Пользователь",

        premium: user.premium,

    };

}

export function toUpdateUserRequest(
    values: ProfileFormValues,
): UpdateUserRequest {

    return {

        firstName: values.firstName,

        lastName: values.lastName,

        phone: values.phone,

    };

}