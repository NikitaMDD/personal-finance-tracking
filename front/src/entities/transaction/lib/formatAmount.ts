import type { Currency } from "../model";

export function formatAmount(
    amount: number,
    currency: Currency,
) {
    return new Intl.NumberFormat(
        "ru-RU",
        {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        },
    ).format(amount);
}