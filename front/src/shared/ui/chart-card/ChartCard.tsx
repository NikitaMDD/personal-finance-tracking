import type {
    PropsWithChildren,
    ReactNode,
} from "react";

import { Card } from "@/shared/ui/card";
import { Divider } from "@/shared/ui/divider";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

interface Props extends PropsWithChildren {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    footer?: ReactNode;
}

export function ChartCard({
    title,
    subtitle,
    actions,
    footer,
    children,
}: Props) {

    return (
        <Card
            className="
                rounded-3xl
                overflow-hidden
            "
        >
            <div className="p-6">
                <Stack
                    direction="row"
                    justify="between"
                    align="start"
                >
                    <div>
                        <Typography
                            variant="h2"
                        >
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography
                                variant="caption"
                                className="
                                    mt-1
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </div>
                    {actions}
                </Stack>
            </div>
            <Divider />
            <div
                className="
                    p-6
                    min-h-[280px]
                "
            >
                {children}
            </div>
            {footer && (
                <>
                    <Divider />
                    <div className="p-6">
                        {footer}
                    </div>
                </>
            )}
        </Card>
    );
}