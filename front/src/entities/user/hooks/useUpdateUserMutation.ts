import {
    useMutation,
} from "@tanstack/react-query";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    userApi,
} from "../api/user.api";

export function useUpdateUserMutation() {

    return useMutation({

        mutationFn:
            userApi.update,

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: [
                    "current-user",
                ],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "profile-statistics",
                ],
            });

        },

    });

}