import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import {
    Tooltip
} from "@/shared/ui/tooltip";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function TooltipSection() {

    return (
        <GuidelineSection title='Tooltip'>
            <Tooltip
                content="Простая подсказка"
            >
                <Button>
                    Hover me
                </Button>
            </Tooltip>

            <Tooltip
                content="Удалить запись"
            >
                <Button
                    variant="secondary"
                >
                    Delete
                </Button>
            </Tooltip>
        </GuidelineSection>
    );
}