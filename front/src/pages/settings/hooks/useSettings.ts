import { useState } from "react";

import {
    settingsMock,
} from "@/entities/settings/model";

import type {
    ThemeMode,
    Currency,
    Language,
    NotificationSettings,
} from "@/entities/settings/model";

export function useSettings() {

    const [settings, setSettings] =
        useState(settingsMock);

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

return {

    settings,

    updateTheme,

    updateCurrency,

    updateLanguage,

    updateNotifications,

    updateMonthStartsFrom,

};
}