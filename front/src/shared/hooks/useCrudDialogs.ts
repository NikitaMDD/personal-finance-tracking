import { useState } from "react";

export function useCrudDialogs<T>() {

    const [createOpen, setCreateOpen] =
        useState(false);

    const [editingItem, setEditingItem] =
        useState<T | null>(null);

    const [deletingItem, setDeletingItem] =
        useState<T | null>(null);

    return {
        create: {
            open: createOpen,
            openDialog() {
                setCreateOpen(true);
            },
            closeDialog() {
                setCreateOpen(false);
            },
        },
        edit: {
            item: editingItem,
            openDialog(item: T) {
                setEditingItem(item);
            },
            closeDialog() {
                setEditingItem(null);
            },
        },
        delete: {
            item: deletingItem,
            openDialog(item: T) {
                setDeletingItem(item);
            },
            closeDialog() {
                setDeletingItem(null);
            },
        },
    };
}