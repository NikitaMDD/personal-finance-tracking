import type { PropsWithChildren } from "react";

import { Typography } from "@/shared/ui/typography";

export function AccountSliderHeader({
    children,
}: PropsWithChildren) {
    return (
        <div
            className="
                flex
                items-center
                justify-between
            "
        >
            <div>
                <Typography
                    as="h2"
                    variant="h2"
                >
                    Мои счета
                </Typography>

                <Typography
                    variant="caption"
                    className="text-[var(--color-text-secondary)]"
                >
                    Выберите счет для просмотра операций
                </Typography>
            </div>

            {children}
        </div>
    );
}