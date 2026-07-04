import { Palette } from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import type {
    AppSettings,
    ThemeMode,
    Language,
} from "@/entities/settings/model";

import {
    SettingsSectionHeader,
} from "../common/SettingsSectionHeader";

import { ThemeSelect } from "./ThemeSelect";
import { LanguageSelect } from "./LanguageSelect";

interface Props {

    settings: AppSettings;

    onThemeChange(
        theme: ThemeMode,
    ): void;

    onLanguageChange(
        language: Language,
    ): void;

}

export function AppearanceCard({

    settings,

    onThemeChange,

    onLanguageChange,

}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >

            <SettingsSectionHeader

                icon={Palette}

                title="Внешний вид"

                description="
                    Настройте оформление приложения
                    и язык интерфейса.
                "

            />

            <div
                className="
                    mt-8
                    grid
                    gap-6
                    md:grid-cols-2
                "
            >

                <ThemeSelect
                    value={
                        settings.theme
                    }
                    onChange={
                        onThemeChange
                    }
                />

                <LanguageSelect
                    value={
                        settings.language
                    }
                    onChange={
                        onLanguageChange
                    }
                />

            </div>

        </Card>

    );

}