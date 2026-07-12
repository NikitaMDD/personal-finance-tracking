import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import {
    useRegisterForm,
} from "@/features/auth/hooks/useRegisterForm";

import {
    useRegisterMutation,
} from "@/features/auth/hooks/useRegisterMutation";

import type {
    RegisterFormData,
} from "@/features/auth/model/register.schema";

import { useToast } from "@/shared/ui/toast";

interface Props {
    onSuccess(
        email: string,
    ): void;
}

export function RegisterForm({
    onSuccess,
}: Props) {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useRegisterForm();

    const registerMutation = useRegisterMutation();
    const toast = useToast();

    const onSubmit = async (
        data: RegisterFormData,
    ) => {

        const {
            confirmPassword,
            ...request
        } = data;

        await registerMutation.mutateAsync(
            request,
        );

        toast.success(
            "Аккаунт успешно создан",
            "Теперь войдите в систему.",
        );

        onSuccess(
            data.email,
        );

    };

    return (

        <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
        >

            <Input
                label="Имя"
                placeholder="Введите имя"
                fullWidth
                error={errors.firstName?.message}
                {...register("firstName")}
            />

            <Input
                label="Фамилия"
                placeholder="Введите фамилию"
                fullWidth
                error={errors.lastName?.message}
                {...register("lastName")}
            />

            <Input
                label="Email"
                placeholder="example@mail.com"
                type="email"
                fullWidth
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                label="Телефон"
                placeholder="+7 (999) 999-99-99"
                fullWidth
                error={errors.phone?.message}
                {...register("phone")}
            />

            <Input
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                fullWidth
                error={errors.password?.message}
                {...register("password")}
            />

            <Input
                label="Подтверждение пароля"
                placeholder="Повторите пароль"
                type="password"
                fullWidth
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
            />

            <Button
                type="submit"
                loading={registerMutation.isPending}
                fullWidth
            >
                Создать аккаунт
            </Button>

        </form>

    );

}