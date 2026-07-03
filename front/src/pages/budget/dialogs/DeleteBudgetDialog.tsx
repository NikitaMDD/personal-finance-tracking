import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    Budget,
} from "@/entities/budget/model";

interface Props {
    open: boolean;

    budget: Budget | null;

    onDelete(): void;

    onOpenChange(
        open: boolean,
    ): void;
}

export function DeleteBudgetDialog({
    open,
    budget,
    onDelete,
    onOpenChange,
}: Props) {

    if (!budget) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Удалить бюджет"
        >
            <Typography>
                Вы действительно хотите удалить бюджет{" "}
                <strong>
                    "{budget.title}"
                </strong>
                ?
            </Typography>

            <Stack
                direction="row"
                justify="end"
                gap="md"
                className="mt-8"
            >
                <Button
                    variant="secondary"
                    onClick={() =>
                        onOpenChange(false)
                    }
                >
                    Отмена
                </Button>

                <Button
                    variant="danger"
                    onClick={onDelete}
                >
                    Удалить
                </Button>
            </Stack>
        </Dialog>
    );
}