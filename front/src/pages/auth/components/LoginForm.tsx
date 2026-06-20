import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useLoginForm } from "@/features/auth/hooks/useLoginForm";
import { useLoginMutation } from "@/features/auth/hooks/useLoginMutation";
import type { LoginFormData } from "@/features/auth/model/login.schema"
export function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useLoginForm();

    const loginMutation = useLoginMutation();

    const onSubmit = async (
        data: LoginFormData,
    ) => {
        await loginMutation.mutateAsync(
            data,
        );
    };

    return (
        <form 
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                label="Email"
                placeholder="example@gmail.com"
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
    )
}