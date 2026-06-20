import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineGrid } from "../components/GuidelineGrid";
import { GuidelineSection } from "../components/GuidelineSection";

export function TypographySection() {
    return (
        <GuidelineSection title="Typography">
            <GuidelineGrid>

                <GuidelineBlock title="Display">
                    <Typography 
                        as="h1"
                        variant="display"
                    >
                        Display Typography
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 1">
                    <Typography 
                        as="h1"
                        variant="h1"
                    >
                        Heading 1
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 2">
                    <Typography 
                        as="h2"
                        variant="h2"
                    >
                        Heading 2
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Heading 3">
                    <Typography 
                        as="h2"
                        variant="h3"
                    >
                        Heading 3
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Body">
                    <Typography 
                        as="p"
                        variant="body"
                    >
                        Это пример основного текста интерфейса.
                    </Typography>
                </GuidelineBlock>

                <GuidelineBlock title="Small">
                    <Typography 
                        as="span"
                        variant="small"
                    >
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