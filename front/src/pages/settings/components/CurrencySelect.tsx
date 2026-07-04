import { Select } from "@/shared/ui/select";

import type {
    Currency,
} from "@/entities/settings/model";

interface Props {

    value: Currency;

    onChange(
        value: Currency,
    ): void;

}

const options = [

    {
        value: "RUB",
        label: "Российский рубль (₽)",
    },

    {
        value: "USD",
        label: "Доллар США ($)",
    },

    {
        value: "EUR",
        label: "Евро (€)",
    },

];

export function CurrencySelect({

    value,

    onChange,

}: Props) {

    return (

        <Select
            label="Валюта"
            value={value}
            options={options}
            onValueChange={value =>
                onChange(
                    value as Currency,
                )
            }
        />

    );

}