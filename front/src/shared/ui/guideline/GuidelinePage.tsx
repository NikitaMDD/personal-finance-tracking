import { TypographySection } from "./sections/TypographySection";
import { Typography } from "../typography";

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
        </main>
    )
}