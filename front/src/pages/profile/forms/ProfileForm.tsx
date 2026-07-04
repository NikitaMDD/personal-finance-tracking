import { zodResolver } from "@hookform/resolvers/zod";

import {
    useForm,
} from "react-hook-form";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";

import {
    profileSchema,
    type ProfileFormValues,
} from "./profile.schema";

interface Props {
    defaultValues?: Partial<ProfileFormValues>;
    submitLabel: string;
    loading?: boolean;
    onSubmit(
        values: ProfileFormValues,
    ): void;
    onCancel(): void;
}

export function ProfileForm({
    defaultValues,
    submitLabel,
    loading,
    onSubmit,
    onCancel,
}: Props) {

    const {

        register,

        handleSubmit,

        formState: {
            errors,
        },

    } =
        useForm<ProfileFormValues>({
            resolver:
                zodResolver(
                    profileSchema,
                ),
            defaultValues: {
                firstName:
                    defaultValues?.firstName ??
                    "",
                lastName:
                    defaultValues?.lastName ??
                    "",
                email:
                    defaultValues?.email ??
                    "",
                phone:
                    defaultValues?.phone ??
                    "",
            },
        });

    return (

        <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
        >

            <Input
                label="Имя"
                error={
                    errors.firstName?.message
                }
                {...register("firstName")}
            />

            <Input
                label="Фамилия"
                error={
                    errors.lastName?.message
                }
                {...register("lastName")}
            />

            <Input
                label="Email"
                type="email"
                error={
                    errors.email?.message
                }
                {...register("email")}
            />

            <Input
                label="Телефон"
                error={
                    errors.phone?.message
                }
                {...register("phone")}
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