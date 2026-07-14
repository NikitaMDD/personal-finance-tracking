import { Dialog } from "@/shared/ui/dialog";

import {
    useUpdateCategoryMutation,
} from "@/entities/category/hooks/useUpdateCategoryMutation";

import type {
    Category,
} from "@/entities/category/model";

import { CategoryForm } from "../forms/CategoryForm";

interface Props {

    open: boolean;

    category: Category | null;

    onOpenChange(
        open: boolean,
    ): void;

}

export function EditCategoryDialog({
    open,
    category,
    onOpenChange,
}: Props) {

    const updateMutation =
        useUpdateCategoryMutation();

    if (!category) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Редактировать категорию"
            description="Измените параметры категории."
        >
            <CategoryForm
                defaultValues={{
                    title: category.title,
                    color: category.color,
                    icon: category.icon,
                    type: category.type,
                }}

                submitLabel="Сохранить"

                loading={
                    updateMutation.isPending
                }

                onCancel={() =>
                    onOpenChange(false)
                }

                onSubmit={async values => {

                    await updateMutation.mutateAsync({

                        id: category.id,

                        data: values,

                    });

                    onOpenChange(false);

                }}
            />
        </Dialog>
    );
}