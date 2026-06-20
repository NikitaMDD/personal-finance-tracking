import { Button } from "@/shared/ui/button";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineGrid } from "../components/GuidelineGrid";
import { GuidelineSection } from "../components/GuidelineSection";

export function ButtonSection() {
    return (
        <GuidelineSection title="Buttons">
            <GuidelineGrid>

                <GuidelineBlock title="Primary">
                    <Button>
                        Primary Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Secondary">
                    <Button variant="secondary">
                        Secondary Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Ghost">
                    <Button variant="ghost">
                        Ghost Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Danger">
                    <Button variant="danger">
                        Delete
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Small">
                    <Button size="sm">
                        Small Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Medium">
                    <Button size="md">
                        Medium Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Large">
                    <Button size="lg">
                        Large Button
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Loading">
                    <Button loading>
                        Save
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Disabled">
                    <Button disabled>
                        Disabled
                    </Button>
                </GuidelineBlock>

                <GuidelineBlock title="Full Width">
                    <Button fullWidth>
                        Continue
                    </Button>
                </GuidelineBlock>

            </GuidelineGrid>
        </GuidelineSection>
    );
}