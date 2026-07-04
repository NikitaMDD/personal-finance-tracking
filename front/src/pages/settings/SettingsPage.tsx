import { useHeader } from "@/shared/hooks/useHeader";

import { useSettings } from "./hooks/useSettings";

import { SettingsHeader } from "./components/SettingsHeader";
import { AppearanceCard } from "./components/AppearanceCard";
import { CurrencyCard } from "./components/CurrencyCard";

export function SettingsPage() {

    const settings =
        useSettings();

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

        </div>

    );

}