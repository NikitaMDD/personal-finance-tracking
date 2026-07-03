import { useHeader } from "@/shared/hooks/useHeader";
import { useUIStore } from "@/shared/store/ui.store";

import { useCategories } from "./hooks/useCategories";

import { CategoriesHeader } from "./components/CategoriesHeader";
import { CategoriesGrid } from "./components/CategoriesGrid";

import { CreateCategoryDialog } from "./dialogs/CreateCategoryDialog";
import { EditCategoryDialog } from "./dialogs/EditCategoryDialog";
import { DeleteCategoryDialog } from "./dialogs/DeleteCategoryDialog";

export function CategoriesPage() {

    const categories = useCategories();

    useHeader({
        search: {
            visible: true,
            placeholder: "Поиск категорий",
        },
    });

    const search =
        useUIStore(
            state => state.searchValue,
        );

    const filteredCategories =
        categories.categories.filter(category =>
            category.title
                .toLowerCase()
                .includes(
                    search.toLowerCase(),
                ),
        );

    return (
        <>
            <CategoriesHeader
                onCreate={
                    categories.create.openDialog
                }
            />
            <CategoriesGrid
                categories={
                    filteredCategories
                }
                onEdit={
                    categories.edit.openDialog
                }
                onDelete={
                    categories.delete.openDialog
                }
            />
            <CreateCategoryDialog
                open={categories.create.open}
                onOpenChange={
                    categories.create.closeDialog
                }
            />
            {categories.edit.item && (
                <EditCategoryDialog
                    category={
                        categories.edit.item
                    }
                    open
                    onOpenChange={
                        categories.edit.closeDialog
                    }
                />
            )}
            {categories.delete.item && (
                <DeleteCategoryDialog
                    category={
                        categories.delete.item
                    }
                    open
                    onOpenChange={
                        categories.delete.closeDialog
                    }
                />
            )}
        </>
    );
}