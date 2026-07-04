import { Select } from "@/shared/ui/select";

import type {
    ThemeMode,
} from "@/entities/settings/model";

interface Props {

    value: ThemeMode;

    onChange(
        value: ThemeMode,
    ): void;

}

const options = [

    {
        value: "light",
        label: "Светлая",
    },

    {
        value: "dark",
        label: "Тёмная",
    },

    {
        value: "system",
        label: "Системная",
    },

];

export function ThemeSelect({
    value,
    onChange,
}: Props) {

    return (

        <Select
            label="Тема"
            value={value}
            placeholder="Выберите тему"
            options={options}
            onValueChange={value =>
                onChange(
                    value as ThemeMode,
                )
            }
        />

    );

}