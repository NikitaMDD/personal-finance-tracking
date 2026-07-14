import { Dialog } from "@/shared/ui/dialog";

import { CategoryForm } from "../forms/CategoryForm";

import {
    useCreateCategoryMutation,
} from "@/entities/category/hooks/useCreateCategoryMutation";

interface Props {
    open: boolean;
    onOpenChange(
        open: boolean,
    ): void;
}

export function CreateCategoryDialog({
    open,
    onOpenChange,
}: Props) {

    const createMutation =
        useCreateCategoryMutation();

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Создать категорию"
            description="Добавьте новую категорию."
        >
            <CategoryForm
                submitLabel="Создать"
                loading={
                    createMutation.isPending
                }
                onCancel={() =>
                    onOpenChange(false)
                }
                onSubmit={async values => {

                    await createMutation.mutateAsync(
                        values,
                    );

                    onOpenChange(false);

                }}
            />
        </Dialog>
    );
}