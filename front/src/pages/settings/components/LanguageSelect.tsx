import { Select } from "@/shared/ui/select";

import type {
    Language,
} from "@/entities/settings/model";

interface Props {

    value: Language;

    onChange(
        value: Language,
    ): void;

}

const options = [

    {
        value: "ru",
        label: "Русский",
    },

    {
        value: "en",
        label: "English",
    },

];

export function LanguageSelect({
    value,
    onChange,
}: Props) {

    return (

        <Select
            label="Язык"
            value={value}
            placeholder="Выберите язык"
            options={options}
            onValueChange={value =>
                onChange(
                    value as Language,
                )
            }
        />

    );

}