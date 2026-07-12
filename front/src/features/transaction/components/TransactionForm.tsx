import { Controller } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";

import { useToast } from "@/shared/ui/toast";

import { useCategories } from "@/entities/category/hooks/useCategories";
import { categoryIcons } from "@/entities/category/lib/categoryIcons";

import { useEffect } from "react"

import type { TransactionSchema } from "../model/transaction.schema";

import {
    useBankConnections,
} from "@/entities/bank-connection/hooks/useBankConnections";

import {
    useCreateTransactionMutation,
} from "../hooks/useCreateTransactionMutation";

import {
    useUpdateTransactionMutation,
} from "../hooks/useUpdateTransactionMutation";

import {
    useTransactionForm,
} from "../hooks/useTransactionForm";

import type {
    Transaction,
} from "@/entities/transaction/model";

import {
    useDeleteTransactionMutation,
} from "../hooks/useDeleteTransactionMutation";

interface Props {
    mode: "create" | "edit";
    transaction?: Transaction;
    createMutation: ReturnType<
        typeof useCreateTransactionMutation
    >;
    updateMutation: ReturnType<
        typeof useUpdateTransactionMutation
    >;
    deleteMutation: ReturnType<
        typeof useDeleteTransactionMutation
    >;
    onSuccess(): void;
}

export function TransactionForm({
    mode,
    transaction,
    onSuccess,
    createMutation,
    updateMutation,
    deleteMutation,
}: Props) {

    const toast =
        useToast();

    const mutation =
        useCreateTransactionMutation();

    const {
        data: categories = [],
    } = useCategories();

    const {
        data: accounts = [],
    } = useBankConnections();

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useTransactionForm();

    useEffect(() => {

        if (!transaction) {

            return;

        }

        reset({

            bankConnectionId:
                transaction.accountId,

            categoryId:
                transaction.categoryId,

            title:
                transaction.title,

            description:
                transaction.description,

            amount:
                transaction.amount,

            type:
                transaction.type === "income"
                    ? "INCOME"
                    : "EXPENSE",

            transactionDate:
                transaction.date
                    .slice(0,16),

        });

    }, [
        transaction,
        reset,
    ]);

    async function submit(
        data: TransactionSchema,
    ) {

        try {

            if (mode === "create") {
                await createMutation.mutateAsync(data);
            } else {
                await updateMutation.mutateAsync({
                    id: transaction!.id,
                    data,
                });
            }

            onSuccess();

        } catch {

            toast.error(
                mode === "create"
                    ? "Не удалось создать операцию"
                    : "Не удалось обновить операцию",
            );

        }

    }

    return (

        <form
            onSubmit={handleSubmit(submit)}
            className="space-y-6"
        >

            <Controller
                control={control}
                name="bankConnectionId"
                render={({ field }) => (

                    <Select
                        label="Счёт"
                        value={field.value}
                        placeholder="Выберите счёт"
                        options={accounts.map(account => ({
                            value: account.id,
                            label: account.bankName,
                            icon: account.logo,
                            description: `••••${account.externalAccountId.slice(-4)}`,
                        }))}
                        onValueChange={field.onChange}

                        renderOption={(option) => (

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <img
                                    src={option.icon}
                                    alt={option.label}
                                    className="h-8 w-8"
                                />

                                <div>

                                    <div>
                                        {option.label}
                                    </div>

                                    <div
                                        className="
                                            text-xs
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {option.description}
                                    </div>

                                </div>

                            </div>

                        )}

                        renderValue={(option) => (

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <img
                                    src={option.icon}
                                    alt={option.label}
                                    className="h-8 w-8"
                                />

                                <div>

                                    <div>
                                        {option.label}
                                    </div>

                                    <div
                                        className="
                                            text-xs
                                            text-[var(--color-text-secondary)]
                                        "
                                    >
                                        {option.description}
                                    </div>

                                </div>

                            </div>

                        )}

                    />

                )}
            />

            <Controller
                control={control}
                name="categoryId"
                render={({ field }) => (

                    <Select
                        label="Категория"
                        value={field.value}
                        placeholder="Выберите категорию"
                        options={categories.map(category => ({
                            value: category.id,
                            label: category.name,
                            icon: category.icon,
                            color: category.color,
                        }))}
                        onValueChange={field.onChange}

                        renderOption={(option) => {

                            const Icon =
                                categoryIcons[
                                    option.icon as keyof typeof categoryIcons
                                ];

                            return (

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-xl
                                        "
                                        style={{
                                            background: option.color,
                                        }}
                                    >

                                        <Icon
                                            size={18}
                                            color="white"
                                        />

                                    </div>

                                    {option.label}

                                </div>

                            );

                        }}

                        renderValue={(option) => {

                            const Icon =
                                categoryIcons[
                                    option.icon as keyof typeof categoryIcons
                                ];

                            return (

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-xl
                                        "
                                        style={{
                                            background: option.color,
                                        }}
                                    >

                                        <Icon
                                            size={18}
                                            color="white"
                                        />

                                    </div>

                                    {option.label}

                                </div>

                            );

                        }}

                    />

                )}
            />

            <Controller
                control={control}
                name="type"
                render={({ field }) => (

                    <Select
                        label="Тип операции"
                        value={field.value}
                        options={[
                            {
                                value: "EXPENSE",
                                label: "Расход",
                            },
                            {
                                value: "INCOME",
                                label: "Доход",
                            },
                        ]}
                        onValueChange={field.onChange}
                    />

                )}
            />

            <Input
                label="Название"
                error={errors.title?.message}
                {...register("title")}
            />

            <Input
                label="Описание"
                error={errors.description?.message}
                {...register("description")}
            />

            <Input
                type="number"
                label="Сумма"
                error={errors.amount?.message}
                {...register(
                    "amount",
                    {
                        valueAsNumber: true,
                    },
                )}
            />

            <Input
                type="datetime-local"
                label="Дата"
                error={
                    errors.transactionDate?.message
                }
                {...register(
                    "transactionDate",
                )}
            />

            <Button
                type="submit"
                fullWidth
                loading={
                    mode === "create"
                        ? createMutation.isPending
                        : updateMutation.isPending
                }
                disabled={!isValid}
            >

                {mode === "create"
                    ? "Создать операцию"
                    : "Сохранить изменения"}

            </Button>
            {mode === "edit" && transaction && (

                <Button
                    type="button"
                    variant="danger"
                    loading={
                        deleteMutation.isPending
                    }
                    onClick={async () => {
                        await deleteMutation.mutateAsync(
                            transaction.id,
                        );
                        onSuccess();
                    }}
                >
                    Удалить
                </Button>

            )}
        </form>
    );
}