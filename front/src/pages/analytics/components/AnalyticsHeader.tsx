import { Typography } from "@/shared/ui/typography";

export function AnalyticsHeader() {
    return (
        <div
            className="
                flex
                items-center
                justify-between
            "
        >
            <Typography
                as="h1"
                variant="h1"
            >
                Аналитика
            </Typography>
        </div>
    );
}