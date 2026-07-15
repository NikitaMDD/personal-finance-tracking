import { api } from "@/shared/api/client/http";

import type {
    UserResponse,
} from "../model/user-response.types";

import type {
    ProfileStatisticsResponse,
} from "../model/profile-statistics-response.types";

import type {
    UpdateUserRequest,
} from "../model/update-user-request.types";

export const userApi = {

    me() {

        return api<UserResponse>(
            "/users/me",
        );

    },

    statistics() {

        return api<ProfileStatisticsResponse>(
            "/users/me/statistics",
        );

    },

    update(
        data: UpdateUserRequest,
    ) {

        return api<UserResponse>(
            "/users/me",
            {
                method: "PATCH",

                body: JSON.stringify(
                    data,
                ),
            },
        );

    },

};