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
    telegram: boolean;
}

export interface SecuritySettings {
    lastLogin: string;
    twoFactorEnabled: boolean;
}

export interface AppSettings {
    theme: ThemeMode;
    currency: Currency;
    language: Language;
    notifications: NotificationSettings;
    monthStartsFrom: number;
    security: SecuritySettings;
}