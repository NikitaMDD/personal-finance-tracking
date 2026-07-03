import type {
    Budget,
} from "../model";

export type BudgetStatus =
    | "normal"
    | "warning"
    | "danger"
    | "overrun";

export function getBudgetStatus(
    budget: Budget,
): BudgetStatus {

    const percent =
        budget.spent / budget.limit;

    if (percent >= 1) {
        return "overrun";
    }

    if (percent >= .9) {
        return "danger";
    }

    if (percent >= .75) {
        return "warning";
    }

    return "normal";
}