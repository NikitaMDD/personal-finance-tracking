import { forwardRef } from "react";

import { Input } from "@/shared/ui/input";

interface Props {
    label?: string;
    value?: number;
    error?: string;
    placeholder?: string;
    onChange(value: number): void;
}

const formatter = new Intl.NumberFormat(
    "ru-RU",
);

export const BudgetLimitInput = forwardRef<
    HTMLInputElement,
    Props
>(
    (
        {
            label = "Лимит",
            value = 0,
            error,
            placeholder = "Введите лимит",
            onChange,
        },
        ref,
    ) => {

        const formatted =
            value > 0
                ? `${formatter.format(value)} ₽`
                : "";

        return (

            <Input
                ref={ref}
                label={label}
                value={formatted}
                placeholder={placeholder}
                error={error}
                inputMode="numeric"
                onChange={event => {

                    const digits =
                        event.target.value.replace(
                            /\D/g,
                            "",
                        );

                    onChange(
                        digits
                            ? Number(digits)
                            : 0,
                    );

                }}
            />

        );

    },
);

BudgetLimitInput.displayName =
    "BudgetLimitInput";