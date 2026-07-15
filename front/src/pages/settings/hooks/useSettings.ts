import {
    useUpdateSettingsMutation,
} from "@/entities/settings/hooks/useUpdateSettingsMutation";

import {
    useSettings as useSettingsQuery,
} from "@/entities/settings/hooks/useSettings";

import {
    toUpdateSettingsRequest,
} from "@/entities/settings/model/settings.mapper";

import type {
    ThemeMode,
    Currency,
    Language,
    NotificationSettings,
    AppSettings,
} from "@/entities/settings/model";

export function useSettings() {

    const settingsQuery =
        useSettingsQuery();

    const updateMutation =
        useUpdateSettingsMutation();

    const settings =
        settingsQuery.data;

    async function update(
        next: AppSettings,
    ) {

        await updateMutation.mutateAsync(
            toUpdateSettingsRequest(
                next,
            ),
        );

    }

    function updateTheme(
        theme: ThemeMode,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            theme,
        });

    }

    function updateCurrency(
        currency: Currency,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            currency,
        });

    }

    function updateLanguage(
        language: Language,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            language,
        });

    }

    function updateNotifications(
        notifications: Partial<NotificationSettings>,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            notifications: {
                ...settings.notifications,
                ...notifications,
            },
        });

    }

    function updateMonthStartsFrom(
        day: number,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            monthStartsFrom: day,
        });

    }

    function updateTwoFactor(
        enabled: boolean,
    ) {

        if (!settings) {
            return;
        }

        update({
            ...settings,
            security: {
                ...settings.security,
                twoFactorEnabled: enabled,
            },
        });

    }

    function openChangePasswordDialog() {

        console.log(
            "Change password",
        );

    }

    return {

        settings,

        isLoading:
            settingsQuery.isLoading,

        isSaving:
            updateMutation.isPending,

        updateTheme,

        updateCurrency,

        updateLanguage,

        updateNotifications,

        updateMonthStartsFrom,

        updateTwoFactor,

        openChangePasswordDialog,

    };

}