import {
    Wallet,
} from "lucide-react";

import { Card } from "@/shared/ui/card";

import type {
    AppSettings,
    Currency,
} from "@/entities/settings/model";

import {
    SettingsSectionHeader,
} from "../common/SettingsSectionHeader";

import {
    CurrencySelect,
} from "./CurrencySelect";

import {
    MonthStartSelect,
} from "./MonthStartSelect";

interface Props {
    settings: AppSettings;
    onCurrencyChange(
        currency: Currency,
    ): void;
    onMonthStartsFromChange(
        day: number,
    ): void;
}

export function CurrencyCard({
    settings,
    onCurrencyChange,
    onMonthStartsFromChange,
}: Props) {

    return (
        <Card
            className="
                rounded-3xl
                p-8
            "
        >
            <SettingsSectionHeader
                icon={Wallet}
                title="Финансы"
                description="
                    Настройте валюту
                    и параметры финансового периода.
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
                <CurrencySelect
                    value={
                        settings.currency
                    }
                    onChange={
                        onCurrencyChange
                    }
                />

                <MonthStartSelect
                    value={
                        settings.monthStartsFrom
                    }
                    onChange={
                        onMonthStartsFromChange
                    }
                />
            </div>
        </Card>
    );
}