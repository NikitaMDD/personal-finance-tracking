import { useState } from "react";

import {
    settingsMock,
} from "@/entities/settings/model";

import {
    THEME_STORAGE_KEY,
} from "@/shared/constants/theme";

import type {
    ThemeMode,
    Currency,
    Language,
    NotificationSettings,
} from "@/entities/settings/model";

export function useSettings() {

    const [settings, setSettings] =
        useState(() => {

            const savedTheme =
                localStorage.getItem(
                    THEME_STORAGE_KEY,
                ) as ThemeMode | null;

            return {

                ...settingsMock,

                theme:
                    savedTheme ??
                    settingsMock.theme,

            };

        });

    function updateTheme(
        theme: ThemeMode,
    ) {
        setSettings(previous => ({
            ...previous,
            theme,
        }));
    }

    function updateCurrency(
        currency: Currency,
    ) {
        setSettings(previous => ({
            ...previous,
            currency,
        }));
    }

    function updateLanguage(
        language: Language,
    ) {
        setSettings(previous => ({
            ...previous,
            language,
        }));
    }

    function updateNotifications(
        notifications: Partial<NotificationSettings>,
    ) {
        setSettings(previous => ({
            ...previous,
            notifications: {
                ...previous.notifications,
                ...notifications,
            },
        }));
    }

    function updateMonthStartsFrom(
        day: number,
    ) {

        setSettings(previous => ({

            ...previous,

            monthStartsFrom: day,

        }));

    }

    function updateTwoFactor(
        enabled: boolean,
    ) {

        setSettings(previous => ({

            ...previous,

            security: {

                ...previous.security,

                twoFactorEnabled: enabled,

            },

        }));

    }

    function openChangePasswordDialog() {
        console.log(
            "Change password",
        );
    }

    return {
        settings,
        updateTheme,
        updateCurrency,
        updateLanguage,
        updateNotifications,
        updateMonthStartsFrom,
        updateTwoFactor,
        openChangePasswordDialog,
    };
}