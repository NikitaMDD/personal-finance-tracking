import type {
    AppSettings,
} from "./settings.types";

export const settingsMock: AppSettings = {
    theme: "light",
    currency: "RUB",
    language: "ru",
    monthStartsFrom: 1,
    notifications: {
        email: true,
        push: true,
        telegram: false,
    },
    security: {
        lastLogin: "Сегодня, 11:42",
        twoFactorEnabled: false,
    },
};