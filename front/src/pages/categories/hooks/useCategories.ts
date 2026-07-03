import { useState } from "react";

import {
    categoriesMock,
    type Category,
} from "@/entities/category/model";

export function useCategories() {

    const [createOpen, setCreateOpen] =
        useState(false);

    const [editingCategory, setEditingCategory] =
        useState<Category | null>(null);

    const [deletingCategory, setDeletingCategory] =
        useState<Category | null>(null);

    return {
        categories: categoriesMock,
        create: {
            open: createOpen,
            openDialog: () => setCreateOpen(true),
            closeDialog: () => setCreateOpen(false),
        },
        edit: {
            category: editingCategory,
            openDialog: (
                category: Category,
            ) => setEditingCategory(category),
            closeDialog: () => setEditingCategory(null),
        },
        delete: {
            category: deletingCategory,
            openDialog: (
                category: Category,
            ) => setDeletingCategory(category),
            closeDialog: () => setDeletingCategory(null),
        },
    };
}