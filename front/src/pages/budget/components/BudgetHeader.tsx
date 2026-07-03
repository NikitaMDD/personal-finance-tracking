import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import { Plus } from "lucide-react";

interface Props {
    onCreate(): void;
}

export function BudgetHeader(
    {onCreate}: Props,
) {

    return (
        <Stack
            direction="row"
            justify="between"
            align="center"
        >
            <div>
                <Typography variant="display">
                    Бюджет
                </Typography>
                <Typography
                    variant="body"
                    className="mt-2 text-[var(--color-text-secondary)]"
                >
                    Планируйте расходы и контролируйте лимиты
                </Typography>
            </div>
            <Button 
                onClick={onCreate}
            >
                <Plus size={18} />
                Создать бюджет
            </Button>
        </Stack>
    );
}