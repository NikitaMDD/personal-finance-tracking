import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    settingsApi,
} from "../api/settings.api";

import type {
    UpdateSettingsRequest,
} from "../model/update-settings-request.types";

import {
    toSettings,
} from "../model/settings.mapper";

export function useUpdateSettingsMutation() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: (
            data: UpdateSettingsRequest,
        ) =>
            settingsApi.update(
                data,
            ),

        onSuccess(response) {

            queryClient.setQueryData(
                ["settings"],
                toSettings(
                    response,
                ),
            );

        },

    });

}