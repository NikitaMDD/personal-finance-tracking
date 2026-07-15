import type {
    AppSettings,
} from "./settings.types";

import type {
    SettingsResponse,
} from "./settings-response.types";

import type {
    UpdateSettingsRequest,
} from "./update-settings-request.types";

export function toSettings(
    response: SettingsResponse,
): AppSettings {

    return {

        theme:
            response.theme.toLowerCase() as AppSettings["theme"],

        language:
            response.language as AppSettings["language"],

        currency:
            response.currency as AppSettings["currency"],

        monthStartsFrom:
            response.monthStartDay,

        notifications: {

            email:
                response.emailNotifications,

            push:
                response.pushNotifications,

            budget:
                response.budgetNotifications,

        },

        security: {

            lastLogin: "—",

            twoFactorEnabled: false,

        },

    };

}

export function toUpdateSettingsRequest(
    settings: AppSettings,
): UpdateSettingsRequest {

    return {

        theme:
            settings.theme.toUpperCase(),

        language:
            settings.language,

        currency:
            settings.currency,

        monthStartDay:
            settings.monthStartsFrom,

        emailNotifications:
            settings.notifications.email,

        pushNotifications:
            settings.notifications.push,

        budgetNotifications:
            settings.notifications.budget,

    };

}