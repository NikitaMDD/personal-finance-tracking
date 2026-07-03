import { TypographySection } from "./sections/TypographySection";
import { Typography } from "../typography";
import { ButtonSection } from "./sections/ButtonsSection";
import { InputsSection } from "./sections/InputsSection";
import { CardsSection } from "./sections/CardsSection";
import { BadgeSection } from "./sections/BadgeSection";
import { SkeletonSection } from "./sections/SkeletonSection"
import { AvatarSection } from "./sections/AvatarSection"
import { TooltipSection } from "./sections/TooltipSection";
import { EmptySection } from "./sections/EmptySection";
import { DialogSection } from "./sections/DialogSection";
import { TabsSection } from "./sections/TabsSection";
import { ChartCardSection } from "./sections/ChartCardSection";
import { ProgressRingSection } from "./sections/ProgressRingSection";

export function GuidelinePage() {
    return (
        <main className="mx-auto max-w-7xl p-12">

            <header className="mb-16">
                <Typography variant="display">
                    Finance UI Kit
                </Typography>

                <Typography 
                    variant="body"
                    className="mt-4 text-[var(--color-text-secondary)]"
                >
                    Компоненты и дизайн-система приложения учета личных финансов
                </Typography>
            </header>

            <TypographySection/>
            <ButtonSection/>
            <InputsSection />
            <CardsSection />
            <BadgeSection />
            <SkeletonSection />
            <AvatarSection />
            <TooltipSection />
            <EmptySection/>
            <DialogSection/>
            <TabsSection/>
            <ChartCardSection/>
            <ProgressRingSection/>
        </main>
    )
}