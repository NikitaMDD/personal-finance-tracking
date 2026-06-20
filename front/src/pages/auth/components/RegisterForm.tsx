import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import {
  useRegisterForm,
} from "@/features/auth/hooks/useRegisterForm";
import { useRegisterMutation } from "@/features/auth/hooks/useRegisterMutation";
import type { RegisterFormData } from "@/features/auth/model/register.schema"

export function RegisterForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useRegisterForm();

    const registerMutation = useRegisterMutation();

    const onSubmit = async (
        data: RegisterFormData,
    ) => {
        await registerMutation.mutateAsync(
            data,
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
                error={errors.name?.message}
                {...register("name")}
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
                loading={
                    registerMutation.isPending
                }
                fullWidth
            >
                Создать аккаунт
            </Button>
        </form>
    )
}