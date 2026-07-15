import { useQuery } from "@tanstack/react-query";

import {
    settingsApi,
} from "../api/settings.api";

import {
    toSettings,
} from "../model/settings.mapper";

export function useSettings() {

    return useQuery({

        queryKey: [
            "settings",
        ],

        queryFn: async () => {

            const response =
                await settingsApi.get();

            return toSettings(
                response,
            );

        },

    });

}