import type {
    Budget,
} from "../model";

export interface CalculatedBudget {
    percent: number;
    remaining: number;
    overrun: number;
}

export function calculateBudget(
    budget: Budget,
): CalculatedBudget {

    const percent =
        Math.min(
            (budget.spent / budget.limit) * 100,
            100,
        );

    const remaining =
        Math.max(
            budget.limit - budget.spent,
            0,
        );

    const overrun =
        Math.max(
            budget.spent - budget.limit,
            0,
        );

    return {
        percent,
        remaining,
        overrun,
    };
}