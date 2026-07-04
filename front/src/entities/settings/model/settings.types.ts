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

export interface AppSettings {
    theme: ThemeMode;
    currency: Currency;
    language: Language;
    monthStartsFrom: number;
    notifications: NotificationSettings;
}