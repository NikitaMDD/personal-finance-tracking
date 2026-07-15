import { useQuery } from "@tanstack/react-query";

import {
    userApi,
} from "../api/user.api";

import {
    toProfileStatistics,
} from "../model/profile-statistics.mapper";

export function useProfileStatistics() {

    return useQuery({

        queryKey: [
            "profile-statistics",
        ],

        queryFn: async () => {

            const response =
                await userApi.statistics();

            return toProfileStatistics(
                response,
            );

        },

    });

}