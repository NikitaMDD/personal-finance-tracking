import { ProgressRing } from "@/shared/ui/progress-ring";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function ProgressRingSection() {
    return (
        <GuidelineSection title="Progress Ring">
            <div className="flex flex-wrap gap-8">

                <GuidelineBlock title="Default">
                    <ProgressRing
                        value={66}
                        center={
                            <>
                                <Typography variant="display">
                                    66%
                                </Typography>

                                <Typography
                                    variant="caption"
                                    className="mt-2 text-[var(--color-text-secondary)]"
                                >
                                    Использовано
                                </Typography>
                            </>
                        }
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Success">
                    <ProgressRing
                        value={84}
                        color="#22C55E"
                        center={
                            <>
                                <Typography variant="display">
                                    84%
                                </Typography>

                                <Typography
                                    variant="caption"
                                    className="mt-2 text-[var(--color-text-secondary)]"
                                >
                                    Выполнено
                                </Typography>
                            </>
                        }
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Danger">
                    <ProgressRing
                        value={100}
                        color="#EF4444"
                        center={
                            <>
                                <Typography variant="display">
                                    100%
                                </Typography>

                                <Typography
                                    variant="caption"
                                    className="mt-2 text-[var(--color-text-secondary)]"
                                >
                                    Лимит
                                </Typography>
                            </>
                        }
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Gradient">
                    <ProgressRing
                        value={72}
                        gradient={[
                            "#115f2d",
                            "#4ADE80",
                        ]}
                        center={
                            <>
                                <Typography variant="display">
                                    100%
                                </Typography>

                                <Typography
                                    variant="caption"
                                    className="mt-2 text-[var(--color-text-secondary)]"
                                >
                                    Лимит
                                </Typography>
                            </>
                        }
                    />
                </GuidelineBlock>

            </div>
        </GuidelineSection>
    );
}