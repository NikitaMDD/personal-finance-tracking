import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Typography } from "@/shared/ui/typography";

import { ROUTES } from "@/shared/constants/routes";

export function RecentTransactionsHeader() {
    return (
        <div className="mb-6 flex items-center justify-between">

            <Typography
                as="h2"
                variant="h2"
            >
                Последние операции
            </Typography>

            <Link
                to={ROUTES.TRANSACTIONS}
                className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[var(--color-primary)]
                    transition-colors
                    hover:opacity-80
                "
            >
                Все операции

                <ArrowRight size={16} />
            </Link>

        </div>
    );
}