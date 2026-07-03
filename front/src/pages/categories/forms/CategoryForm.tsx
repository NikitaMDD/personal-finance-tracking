import { zodResolver } from "@hookform/resolvers/zod";

import {
    Controller,
    useForm,
} from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import { IconPicker } from "@/shared/ui/icon-picker";
import { ColorPicker } from "@/shared/ui/color-picker";
import { Select } from "@/shared/ui/select";

import {
    categorySchema,
    type CategoryFormValues,
} from "./category.schema";

interface Props {
    defaultValues?: Partial<CategoryFormValues>;
    submitLabel: string;
    loading?: boolean;
    onSubmit(values: CategoryFormValues): void;
    onCancel(): void;
}

export function CategoryForm({
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
    } = useForm<CategoryFormValues>({
        resolver: zodResolver(
            categorySchema,
        ),
        defaultValues: {
            title: defaultValues?.title ?? "",
            type:
                defaultValues?.type ??
                "expense",
            color:
                defaultValues?.color ??
                "#22C55E",
            icon:
                defaultValues?.icon ??
                "shopping-basket",
        },
    });
    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                label="Название"
                error={errors.title?.message}
                {...register("title")}
            />
            <Controller
                control={control}
                name="type"
                render={({ field }) => (
                    <Select
                        label="Тип категории"
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="Выберите тип"
                        options={[
                            {
                                value: "expense",
                                label: "Расход",
                            },
                            {
                                value: "income",
                                label: "Доход",
                            },
                        ]}
                    />
                )}
            />

            <div>
                <Typography
                    className="mb-3"
                >
                    Иконка
                </Typography>

                <Controller
                    control={control}
                    name="icon"
                    render={({ field }) => (
                        <IconPicker
                            value={field.value}
                            onChange={
                                field.onChange
                            }
                        />
                    )}
                />
            </div>

            <div>
                <Typography
                    className="mb-3"
                >
                    Цвет
                </Typography>

                <Controller
                    control={control}
                    name="color"
                    render={({ field }) => (
                        <ColorPicker
                            value={field.value}
                            onChange={
                                field.onChange
                            }
                        />
                    )}
                />
            </div>

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