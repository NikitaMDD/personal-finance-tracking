import { Typography } from "@/shared/ui/typography";

interface Props {

    label: string;

    value: string;

}

export function InfoRow({

    label,

    value,

}: Props) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--color-border)]
                pb-4
            "
        >

            <Typography>

                {label}

            </Typography>

            <Typography
                className="
                    text-[var(--color-text-secondary)]
                "
            >

                {value}

            </Typography>

        </div>

    );

}