import { Avatar } from "@/shared/ui/avatar";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function AvatarSection() {

    return (
        <GuidelineSection title="Avatar">

            <div className="flex items-center gap-6">
                <GuidelineBlock title="Avatar size sm">
                    <Avatar
                        size="sm"
                    />  
                </GuidelineBlock>

                <GuidelineBlock title="Avatar size md">
                    <Avatar
                        size="md"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Avatar size lg">
                    <Avatar
                        size="lg"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Avatar size xl">
                    <Avatar
                        size="xl"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Avatar with name">
                    <Avatar
                        name="Никита Марчук"
                    />
                </GuidelineBlock>

                <GuidelineBlock title="Avatar broken">
                    <Avatar
                        src="/broken-image.png"
                        name=""
                    />
                </GuidelineBlock>

            </div>
        </GuidelineSection>
    );
}