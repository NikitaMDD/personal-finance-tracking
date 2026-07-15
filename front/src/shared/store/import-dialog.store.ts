import { create } from "zustand";

interface ImportDialogStore {

    open: boolean;

    openDialog(): void;

    closeDialog(): void;

}

export const useImportDialogStore =
    create<ImportDialogStore>(
        set => ({

            open: false,

            openDialog() {

                set({
                    open: true,
                });

            },

            closeDialog() {

                set({
                    open: false,
                });

            },

        }),
    );