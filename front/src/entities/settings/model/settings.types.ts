export type ThemeMode =
    | "light"
    | "dark"
    | "system";

export type Currency =
    | "RUB"
    | "USD"
    | "EUR";

export type Language =
    | "ru"
    | "en";

export interface NotificationSettings {

    email: boolean;

    push: boolean;

    budget: boolean;

}

export interface SecuritySettings {

    lastLogin: string;

    twoFactorEnabled: boolean;

}

export interface AppSettings {

    theme: ThemeMode;

    currency: Currency;

    language: Language;

    monthStartsFrom: number;

    notifications: NotificationSettings;

    security: SecuritySettings;

}