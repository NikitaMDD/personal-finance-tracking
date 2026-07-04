import { Switch } from "@/shared/ui/switch";
import { Typography } from "@/shared/ui/typography";

interface Props {

    title: string;

    helperText: string;

    checked: boolean;

    onCheckedChange(
        checked: boolean,
    ): void;

}

export function NotificationItem({

    title,

    helperText,

    checked,

    onCheckedChange,

}: Props) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                gap-6
                py-4

                not-last:border-b
                border-[var(--color-border)]
            "
        >

            <div>

                <Typography
                    variant="h3"
                >
                    {title}
                </Typography>

                <Typography
                    variant="caption"
                    className="
                        mt-1
                        text-[var(--color-text-secondary)]
                    "
                >
                    {helperText}
                </Typography>

            </div>

            <Switch
                checked={checked}
                onCheckedChange={
                    onCheckedChange
                }
            />

        </div>

    );

}