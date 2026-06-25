// Тоже отказались перейдет именно в dashboard компонент

import { Typography } from "@/shared/ui/typography";

import { dashboardInsights } from "@/entities/dashboard";

export function HeaderGreeting() {

    const insight = dashboardInsights[0];

    return (
        <div>

            <Typography
                as="h1"
                variant="h2"
            >
                {insight.title}
            </Typography>

            <Typography
                variant="body"
                className="mt-1 text-[var(--color-text-secondary)]"
            >
                {insight.description}
            </Typography>

        </div>
    );
}