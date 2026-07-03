import { ICON_MAP }
    from "@/shared/ui/icon-picker/icons";

import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    Budget,
} from "@/entities/budget/model";

import {
    BudgetActions,
} from "./BudgetActions";

interface Props {
    budget: Budget;
    onEdit(): void;
    onDelete(): void;
}

export function BudgetCardHeader({
    budget,
    onEdit,
    onDelete,
}: Props) {

    const Icon =
        ICON_MAP[budget.icon];

    return (

        <Stack
            direction="row"
            justify="between"
            align="center"
        >
            <Stack
                direction="row"
                align="center"
                gap="md"
            >
                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                    "
                    style={{
                        background:
                            `${budget.color}15`,
                    }}
                >
                    <Icon
                        size={24}
                        color={budget.color}
                    />
                </div>
                <Typography
                    variant="h3"
                >
                    {budget.title}
                </Typography>
            </Stack>
            <BudgetActions
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </Stack>
    );
}