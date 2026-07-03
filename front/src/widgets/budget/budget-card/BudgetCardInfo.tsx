import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import {
    calculateBudget,
} from "@/entities/budget/lib";

import type {
    Budget,
} from "@/entities/budget/model";

import { Divider } from "@/shared/ui/divider/";

interface Props {

    budget: Budget;

}

export function BudgetCardInfo({
    budget,
}: Props) {

    const {
        remaining,
    } = calculateBudget(budget,);

    return (

        <Stack
            gap="sm"
            className="mt-6"
        >
            <Typography variant="display">
                {budget.spent.toLocaleString("ru-RU")} ₽
            </Typography>

            <Typography
                variant="caption"
                className="
                    mt-2
                    text-[var(--color-text-secondary)]
                "
            >
                из {budget.limit.toLocaleString("ru-RU")} ₽
            </Typography>

            <Divider className="my-6"/>

            <Typography variant="caption">
                Осталось
            </Typography>

            <Typography variant="h2">
                {remaining.toLocaleString("ru-RU")} ₽
            </Typography>
        </Stack>
    );
}