import { Typography } from "@/shared/ui/typography";

interface AccountCardFooterProps {
    text: string;
}

export function AccountCardFooter({
    text,
}: AccountCardFooterProps) {
    return (
        <Typography
            variant="small"
            className="text-[var(--color-text-secondary)]"
        >
            {text}
        </Typography>
    );
}