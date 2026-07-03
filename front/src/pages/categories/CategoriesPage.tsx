import { useCategories } from "./hooks/useCategories";

import { CategoriesHeader } from "./components/CategoriesHeader";
import { CategoriesGrid } from "./components/CategoriesGrid";

import { CreateCategoryDialog } from "./dialogs/CreateCategoryDialog";
import { EditCategoryDialog } from "./dialogs/EditCategoryDialog";
import { DeleteCategoryDialog } from "./dialogs/DeleteCategoryDialog";

export function CategoriesPage() {

    const categories =
        useCategories();

    return (

        <>

            <CategoriesHeader
                onCreate={
                    categories.create.openDialog
                }
            />

            <CategoriesGrid
                categories={categories.categories}
                onEdit={
                    categories.edit.openDialog
                }
                onDelete={
                    categories.delete.openDialog
                }
            />
            <CreateCategoryDialog
                open={
                    categories.create.open
                }
                onOpenChange={(open) =>
                    open
                        ? categories.create.openDialog()
                        : categories.create.closeDialog()
                }
            />
            {categories.edit.category && (
                <EditCategoryDialog
                    open
                    category={
                        categories.edit.category
                    }
                    onOpenChange={(open) => {
                        if (!open) {
                            categories.edit.closeDialog();
                        }
                    }}
                />
            )}
            {categories.delete.category && (
                <DeleteCategoryDialog
                    open
                    category={
                        categories.delete.category
                    }
                    onOpenChange={(open) => {
                        if (!open) {
                            categories.delete.closeDialog();
                        }
                    }}
                />
            )}
        </>
    );
}