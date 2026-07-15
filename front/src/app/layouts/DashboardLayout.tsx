import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import { ImportTransactionsDialog } from "@/features/import-transactions/dialogs/ImportTransactionsDialog";
import { useImportDialogStore } from "@/shared/store/import-dialog.store";

export default function DashboardLayout() {

    const importDialog =
        useImportDialogStore();

    return (
        <div className="flex py-5 h-screen bg-[var(--color-background)]">

            <Sidebar />
            <ImportTransactionsDialog
                open={importDialog.open}
                onOpenChange={open =>
                    open
                        ? importDialog.openDialog()
                        : importDialog.closeDialog()
                }
            />

            <div
                className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    overflow-hidden
                "
            >

                <Header />

                <main className="flex-1 overflow-y-auto pt-5 pl-[6px] pr-[10px]">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}