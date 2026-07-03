import {
    ArrowDown,
    ArrowUp,
    Wallet,
    Receipt,
} from "lucide-react";

import { AnalyticsCard } from "./AnalyticsCard";

import type {
    ExpenseCategory,
    AnalyticsSummary,
} from "@/entities/analytics/model";

interface Props {
    summary: AnalyticsSummary;
    hoveredCategory?: ExpenseCategory;
}

export function AnalyticsSummary({
    summary,
}: Props) {

    return (
        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-4
            "
        >
            <AnalyticsCard
                title="Доход"
                value={`${summary.income.toLocaleString()} ₽`}
                color="#22C55E"
                icon={
                    <ArrowUp
                        color="#22C55E"
                    />
                }
            />

            <AnalyticsCard
                title="Расход"
                value={`${summary.expenses.toLocaleString()} ₽`}
                color="#EF4444"
                icon={
                    <ArrowDown
                        color="#EF4444"
                    />
                }
            />

            <AnalyticsCard
                title="Баланс"
                value={`${summary.balance.toLocaleString()} ₽`}
                color="#3B82F6"
                icon={
                    <Wallet
                        color="#3B82F6"
                    />
                }
            />

            <AnalyticsCard
                title="Операции"
                value={summary.operations.toString()}
                color="#F59E0B"
                icon={
                    <Receipt
                        color="#F59E0B"
                    />
                }
            />
        </div>
    );
}