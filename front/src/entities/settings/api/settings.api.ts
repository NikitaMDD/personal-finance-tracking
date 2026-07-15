import { api } from "@/shared/api/client/http";

import type {
    SettingsResponse,
} from "../model/settings-response.types";

import type {
    UpdateSettingsRequest,
} from "../model/update-settings-request.types";

export const settingsApi = {

    get() {

        return api<SettingsResponse>(
            "/settings",
        );

    },

    update(
        data: UpdateSettingsRequest,
    ) {

        return api<SettingsResponse>(
            "/settings",
            {
                method: "PUT",
                body: JSON.stringify(data),
            },
        );

    },

};