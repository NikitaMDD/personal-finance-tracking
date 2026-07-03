import { Dialog } from "@/shared/ui/dialog";
import { CategoryForm } from "../forms/CategoryForm";

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

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Создать категорию"
            description="Добавьте новую категорию расходов."
        >
            <CategoryForm
                submitLabel="Создать"
                onCancel={() =>
                    onOpenChange(false)
                }
                onSubmit={(values) => {
                    console.log(values);
                    onOpenChange(false);
                }}
            />
        </Dialog>
    );
}