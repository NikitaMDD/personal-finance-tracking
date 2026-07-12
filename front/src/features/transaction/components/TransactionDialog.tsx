import { Dialog } from "@/shared/ui/dialog";

import { TransactionForm } from "./TransactionForm";

import type {
    Transaction,
} from "@/entities/transaction/model";

import {
    useCreateTransactionMutation
} from "../hooks/useCreateTransactionMutation";

import {
    useUpdateTransactionMutation
} from "../hooks/useUpdateTransactionMutation";

import {
    useDeleteTransactionMutation
} from "../hooks/useDeleteTransactionMutation";

interface Props {

    open: boolean;

    mode?: "create" | "edit";

    transaction?: Transaction;

    onOpenChange(
        open: boolean,
    ): void;

}

export function TransactionDialog({
    open,
    mode = "create",
    transaction,
    onOpenChange,
}: Props) {

    const createMutation =
        useCreateTransactionMutation();

    const updateMutation =
        useUpdateTransactionMutation();

    const deleteMutation =
        useDeleteTransactionMutation();

    return (

        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            size="md"
            title={
                mode === "create"
                    ? "Новая операция"
                    : "Редактировать операцию"
            }
            description={
                mode === "create"
                    ? "Добавьте новую финансовую операцию."
                    : "Измените информацию об операции."
            }
        >

            <TransactionForm

                transaction={transaction}

                mode={mode}

                createMutation={createMutation}
                updateMutation={updateMutation}
                deleteMutation={deleteMutation}

                onSuccess={() => {

                    onOpenChange(false);

                }}

            />

        </Dialog>

    );

}