import { useHeader } from "@/shared/hooks/useHeader";

import { useSettings } from "./hooks/useSettings";

import { SettingsHeader } from "./components/SettingsHeader";
import { AppearanceCard } from "./components/AppearanceCard";
import { CurrencyCard } from "./components/CurrencyCard";
import { NotificationsCard } from "./components/NotificationsCard";
import { SecurityCard } from "./components/SecurityCard";
import { AboutCard } from "./components/AboutCard";
import { useTheme } from "@/shared/hooks/useTheme";

import { useAuth } from "@/shared/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/shared/ui/toast";
import { ROUTES } from "@/shared/constants/routes";

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

    const { logout } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogout = () => {

        logout();

        toast.success(
            "Вы успешно вышли из системы",
        );

        navigate(
            ROUTES.AUTH,
            {
                replace: true,
            },
        );

    };

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
                    handleLogout
                }
            />

            <AboutCard
                version="1.0.0"
            />

        </div>
    );
}