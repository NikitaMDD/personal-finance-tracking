import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineGrid } from "../components/GuidelineGrid";
import { GuidelineSection } from "../components/GuidelineSection";

export function TypographySection() {
    return (
        <GuidelineSection title="Typography">
            <GuidelineGrid>

                <GuidelineBlock title="Display">
                    <Typography variant="display">
                        Display Typography
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 1">
                    <Typography variant="h1">
                        Heading 1
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 2">
                    <Typography variant="h2">
                        Heading 2
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 3">
                    <Typography variant="h3">
                        Heading 3
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Body">
                    <Typography variant="body">
                        Это пример основного текста интерфейса.
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Small">
                    <Typography variant="small">
                        Дополнительный текст небольшого размера.
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Caption">
                    <Typography variant="caption">
                        Подпись или второстепенная информация.
                    </Typography>
                </GuidelineBlock>

            </GuidelineGrid>
        </GuidelineSection>
    );
}