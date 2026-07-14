import { useState } from "react";

import {
    useAnalyticsSummary,
} from "@/entities/analytics/hooks/useAnalyticsSummary";

import {
    useAnalyticsCategories,
} from "@/entities/analytics/hooks/useAnalyticsCategories";

import {
    useAnalyticsMonthly,
} from "@/entities/analytics/hooks/useAnalyticsMonthly";

import {
    useAnalyticsDaily,
} from "@/entities/analytics/hooks/useAnalyticsDaily";

import type {
    AnalyticsPeriod,
    ExpenseCategory,
} from "@/entities/analytics/model";

export function useAnalytics() {

    const [
        period,
        setPeriod,
    ] = useState<AnalyticsPeriod>(
        "month",
    );

    const [
        hoveredCategory,
        setHoveredCategory,
    ] = useState<ExpenseCategory>();

    const [
        selectedAccount,
        setSelectedAccount,
    ] = useState<string>();

    const summaryQuery =
        useAnalyticsSummary(
            period,
        );

    const categoriesQuery =
        useAnalyticsCategories(
            period,
        );

    const monthlyQuery =
        useAnalyticsMonthly(
            period,
        );

    const dailyQuery =
        useAnalyticsDaily(
            period,
        );

    const isLoading =
        summaryQuery.isLoading ||
        categoriesQuery.isLoading ||
        monthlyQuery.isLoading ||
        dailyQuery.isLoading;

    return {

        period,
        setPeriod,

        hoveredCategory,
        setHoveredCategory,

        selectedAccount,
        setSelectedAccount,

        summary:
            summaryQuery.data ?? {
                income: 0,
                expenses: 0,
                balance: 0,
                operations: 0,
            },

        categories:
            categoriesQuery.data ?? [],

        monthly:
            monthlyQuery.data ?? [],

        daily:
            dailyQuery.data ?? [],

        isLoading,

    };

}