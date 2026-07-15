import { useQuery } from "@tanstack/react-query";

import {
    userApi,
} from "../api/user.api";

import {
    toUser,
} from "../model/user.mapper";

export function useCurrentUser() {

    return useQuery({

        queryKey: [
            "current-user",
        ],

        queryFn: async () => {

            const response =
                await userApi.me();

            return toUser(
                response,
            );

        },

    });

}