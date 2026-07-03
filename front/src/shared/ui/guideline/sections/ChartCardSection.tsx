import { ChartCard } from "@/shared/ui/chart-card";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function ChartCardSection() {

    return (
        <GuidelineSection title="Chart Card">
            <GuidelineBlock title="Default">
                <ChartCard
                    title="Расходы по категориям"
                    subtitle="За текущий месяц"
                >
                    <div
                        className="
                            flex
                            h-64
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-dashed
                            border-[var(--color-border)]
                        "
                    >
                        <Typography
                            variant="body"
                            className="
                                text-[var(--color-text-secondary)]
                            "
                        >
                            Здесь будет график
                        </Typography>
                    </div>
                </ChartCard>
            </GuidelineBlock>
        </GuidelineSection>
    );
}