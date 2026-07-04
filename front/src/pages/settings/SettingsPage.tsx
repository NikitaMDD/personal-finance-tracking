import { useHeader } from "@/shared/hooks/useHeader";

import { useSettings } from "./hooks/useSettings";

import { SettingsHeader } from "./components/SettingsHeader";
import { AppearanceCard } from "./components/AppearanceCard";
import { CurrencyCard } from "./components/CurrencyCard";
import { NotificationsCard } from "./components/NotificationsCard";
import { SecurityCard } from "./components/SecurityCard";
import { AboutCard } from "./components/AboutCard";
import { useTheme } from "@/shared/hooks/useTheme";

export function SettingsPage() {

    const settings =
        useSettings();

    useTheme(
        settings.settings.theme,
    );

    useHeader({
        search: {
            visible: false,
            placeholder: "",
        },
    });

    return (

        <div
            className="
                space-y-8
            "
        >

            <SettingsHeader />

            <AppearanceCard
                settings={settings.settings}
                onThemeChange={
                    settings.updateTheme
                }
                onLanguageChange={
                    settings.updateLanguage
                }
            />

            <CurrencyCard
                settings={settings.settings}
                onCurrencyChange={
                    settings.updateCurrency
                }
                onMonthStartsFromChange={
                    settings.updateMonthStartsFrom
                }
            />

            <NotificationsCard
                settings={settings.settings}
                onNotificationsChange={
                    settings.updateNotifications
                }
            />

            <SecurityCard
                security={
                    settings.settings.security
                }
                onTwoFactorChange={
                    settings.updateTwoFactor
                }
                onChangePassword={
                    settings.openChangePasswordDialog
                }
                onLogout={
                    settings.logoutUser
                }
            />

            <AboutCard
                version="1.0.0"
            />

        </div>
    );
}