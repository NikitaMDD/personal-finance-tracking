import {
    useMemo,
    useState,
} from "react";

import {
    analyticsMock,
} from "@/entities/analytics/model";

import type {
    AnalyticsPeriod,
    ExpenseCategory,
} from "@/entities/analytics/model";

export function useAnalytics() {

    const [
        period,
        setPeriod,
    ] =
        useState<AnalyticsPeriod>("month");

    const [
        hoveredCategory,
        setHoveredCategory,
    ] =
        useState<ExpenseCategory>();

    const [
        selectedAccount,
        setSelectedAccount,
    ] =
        useState<string>();

    const analytics =
        useMemo(
            () => analyticsMock[period],
            [period],
        );

    return {

        period,
        setPeriod,

        hoveredCategory,
        setHoveredCategory,

        selectedAccount,
        setSelectedAccount,

        ...analytics,

    };

}