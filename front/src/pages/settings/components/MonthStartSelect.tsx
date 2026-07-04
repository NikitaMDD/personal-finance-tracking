import { Select } from "@/shared/ui/select";

interface Props {
    value: number;
    onChange(
        value: number,
    ): void;
}

const options = Array.from(
    {
        length: 28,
    },
    (_, index) => ({
        value:
            String(index + 1),
        label:
            String(index + 1),
    }),
);

export function MonthStartSelect({
    value,
    onChange,
}: Props) {

    return (
        <Select
            label="Первый день месяца"
            value={String(value)}
            options={options}
            onValueChange={value =>
                onChange(
                    Number(value),
                )
            }
        />
    );
}