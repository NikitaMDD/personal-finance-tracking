import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { ROUTES } from "@/shared/constants/routes";

import { useAuth } from "@/shared/auth";

import { useLoginForm } from "@/features/auth/hooks/useLoginForm";
import { useLoginMutation } from "@/features/auth/hooks/useLoginMutation";

import { useToast } from "@/shared/ui/toast";

import type {
    LoginFormData,
} from "@/features/auth/model/login.schema";

interface Props {
    initialEmail?: string;
}

export function LoginForm({initialEmail}: Props) {

    const {

        register,

        handleSubmit,

        formState: {

            errors,

        },

        setValue,

    } = useLoginForm();

    const {
        login,
    } = useAuth();

    const toast = useToast();

    useEffect(() => {
        if (initialEmail) {
            setValue(
                "email",
                initialEmail,
            );
        }
    }, [
        initialEmail,
        setValue,
    ]);

    const navigate = useNavigate();

    const loginMutation = useLoginMutation();

    const onSubmit = async (
        data: LoginFormData,
    ) => {

        try {

            const response =
                await loginMutation.mutateAsync(
                    data,
                );

            await login(
                response.accessToken,
                response.refreshToken ?? "",
            );

            toast.success(
                "Добро пожаловать!",
            );

            navigate(
                ROUTES.DASHBOARD,
            );

        } catch {
            toast.error(
                "Не удалось выполнить вход",
                "Проверьте email и пароль.",
            );
        }

    };

    return (

        <form

            className="space-y-4"

            onSubmit={handleSubmit(
                onSubmit,
            )}

        >

            <Input
                label="Email"
                placeholder="example@mail.com"
                type="email"
                fullWidth
                error={
                    errors.email?.message
                }
                {...register("email")}
            />

            <Input
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                fullWidth
                error={
                    errors.password?.message
                }
                {...register("password")}
            />

            <Button
                type="submit"
                loading={
                    loginMutation.isPending
                }
                fullWidth
            >
                Войти
            </Button>

        </form>

    );

}