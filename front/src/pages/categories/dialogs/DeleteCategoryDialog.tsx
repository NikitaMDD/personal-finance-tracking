import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    Category,
} from "@/entities/category/model";

interface Props {
    open: boolean;
    category: Category;
    onOpenChange(
        open: boolean,
    ): void;
}

export function DeleteCategoryDialog({
    open,
    category,
    onOpenChange,
}: Props) {
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
                    onClick={() => {
                        console.log(category.id);
                        onOpenChange(false);
                    }}
                >
                    Удалить
                </Button>
            </Stack>
        </Dialog>
    );
}