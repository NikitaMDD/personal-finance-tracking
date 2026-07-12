import { Controller } from "react-hook-form";

import { Dialog } from "@/shared/ui/dialog";
import { Select } from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { useToast } from "@/shared/ui/toast";

import { useBanks } from "@/entities/bank/hooks/useBanks";

import { useConnectBankForm } from "../hooks/useConnectBankForm";
import { useConnectBankMutation } from "../hooks/useConnectBankMutation";

interface Props {
    open: boolean;
    onOpenChange(
        open: boolean,
    ): void;
}

export function ConnectBankDialog({
    open,
    onOpenChange,
}: Props) {

    const toast = useToast();

    const {
        data: banks = [],
        isLoading,
    } = useBanks();

    const mutation =
        useConnectBankMutation();

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
    } = useConnectBankForm();

    async function onSubmit(
        data: {
            bankId: string;
            externalAccountId: string;
        },
    ) {
        try {
            await mutation.mutateAsync(
                data,
            );
            toast.success(
                "Банк успешно подключён",
            );
            reset();
            onOpenChange(false);
        } catch {
            toast.error(
                "Не удалось подключить банк",
            );
        }
    }

    return (

        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            size="sm"
            title="Подключить банк"
            description="
                Выберите банк и укажите
                идентификатор счёта.
            "
        >
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name="bankId"
                    render={({ field }) => (
                        <Select
                            label="Банк"
                            value={field.value}
                            placeholder="Выберите банк"
                            options={banks.map(bank => ({
                                value: bank.id,
                                label: bank.name,
                                icon: bank.logo,
                                color: bank.color,
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
                                        className="
                                            h-6
                                            w-6
                                        "
                                    />
                                    {option.label}
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
                                        className="
                                            h-6
                                            w-6
                                        "
                                    />
                                    {option.label}
                                </div>
                            )}
                        />
                    )}
                />
                {errors.bankId && (
                    <p
                        className="
                            text-sm
                            text-red-500
                        "
                    >
                        {errors.bankId.message}
                    </p>
                )}
                <Input
                    label="Идентификатор счёта"
                    placeholder="Например: ****4589"
                    error={
                        errors.externalAccountId?.message
                    }
                    {...register(
                        "externalAccountId",
                    )}
                />
                <Button
                    type="submit"
                    fullWidth
                    loading={
                        mutation.isPending
                    }
                    disabled={
                        !isValid ||
                        isLoading
                    }

                >
                    Подключить
                </Button>
            </form>
        </Dialog>
    );
}