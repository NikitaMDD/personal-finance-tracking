import { zodResolver } from "@hookform/resolvers/zod";

import {
    Controller,
    useForm,
} from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Stack } from "@/shared/ui/stack";

import { BudgetLimitInput } from "./BudgetLimitInput";
import { BudgetPeriodSelect } from "./BudgetPeriodSelect";
import { BudgetCategorySelect } from "./BudgetCategorySelect";

import {
    budgetSchema,
    type BudgetFormValues,
} from "./budget.schema";

interface Props {
    defaultValues?: Partial<BudgetFormValues>;
    submitLabel: string;
    loading?: boolean;
    onSubmit(values: BudgetFormValues): void;
    onCancel(): void;
}

export function BudgetForm({
    defaultValues,
    submitLabel,
    loading,
    onSubmit,
    onCancel,
}: Props) {

    const {
        register,
        handleSubmit,
        control,
        formState: {
            errors,
        },
    } = useForm<BudgetFormValues>({
        resolver: zodResolver(
            budgetSchema,
        ),
        defaultValues: {
            title:
                defaultValues?.title ?? "",
            categoryId:
                defaultValues?.categoryId ?? "",
            limit:
                defaultValues?.limit ?? 0,
            period:
                defaultValues?.period ?? "month",
        },
    });

    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                label="Название бюджета"
                placeholder="Например: Продукты"
                error={errors.title?.message}
                {...register("title")}
            />

            <Controller
                control={control}
                name="categoryId"
                render={(props) => (
                    <BudgetCategorySelect
                        value={props.field.value}
                        onChange={props.field.onChange}
                        error={
                            props.fieldState.error?.message
                        }
                    />
                )}
            />

            <Controller
                control={control}
                name="limit"
                render={(props) => (
                    <BudgetLimitInput
                        value={props.field.value}
                        onChange={props.field.onChange}
                        error={
                            props.fieldState.error?.message
                        }
                    />
                )}
            />

            <Controller
                control={control}
                name="period"
                render={(props) => (
                    <BudgetPeriodSelect
                        value={props.field.value}
                        onChange={props.field.onChange}
                    />
                )}
            />

            <Stack
                direction="row"
                justify="end"
                gap="md"
            >
                <Button
                    type="button"
                    variant="secondary"
                    onClick={onCancel}
                >
                    Отмена
                </Button>

                <Button
                    type="submit"
                    loading={loading}
                >
                    {submitLabel}
                </Button>
            </Stack>
        </form>
    );
}