import {
    PiggyBank,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

export function BudgetGridEmpty() {

    return (

        <Card
            className="
                flex
                flex-col
                items-center
                rounded-3xl
                p-12
            "
        >

            <PiggyBank
                size={56}
                className="
                    text-[var(--color-text-secondary)]
                "
            />

            <Typography
                variant="h2"
                className="mt-6"
            >
                Пока нет бюджетов
            </Typography>

            <Typography
                className="
                    mt-3
                    max-w-md
                    text-center
                    text-[var(--color-text-secondary)]
                "
            >
                Создайте первый бюджет, чтобы
                контролировать расходы.
            </Typography>

            <Button
                className="mt-8"
            >
                Создать бюджет
            </Button>
        </Card>
    );
}