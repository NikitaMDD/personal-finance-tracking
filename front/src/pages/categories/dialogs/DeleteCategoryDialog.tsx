import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import {
    useDeleteCategoryMutation,
} from "@/entities/category/hooks/useDeleteCategoryMutation";

import type {
    Category,
} from "@/entities/category/model";

interface Props {

    open: boolean;

    category: Category | null;

    onOpenChange(
        open: boolean,
    ): void;

}

export function DeleteCategoryDialog({
    open,
    category,
    onOpenChange,
}: Props) {

    const deleteMutation =
        useDeleteCategoryMutation();

    if (!category) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Удалить категорию"
        >
            <Typography>

                Вы действительно хотите удалить категорию{" "}

                <strong>

                    "{category.title}"

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
                    loading={
                        deleteMutation.isPending
                    }
                    onClick={async () => {

                        await deleteMutation.mutateAsync(
                            category.id,
                        );

                        onOpenChange(false);

                    }}
                >
                    Удалить
                </Button>
            </Stack>
        </Dialog>
    );
}