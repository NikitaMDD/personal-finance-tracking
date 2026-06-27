import { Badge } from "@/shared/ui/badge";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function BadgeSection() {

    return (

        <GuidelineSection title={'Badge'}>

            <div className="flex flex-wrap gap-4">

                <GuidelineBlock title='Primary'>
                    <Badge>
                        Primary
                    </Badge> 
                </GuidelineBlock>

                <GuidelineBlock title='Secondary'>
                    <Badge variant="secondary">
                        Secondary
                    </Badge>
                </GuidelineBlock>

                <GuidelineBlock title='Secondary'>
                    <Badge variant="success">
                        Success
                    </Badge>
                </GuidelineBlock>

                <GuidelineBlock title='warning'>
                    <Badge variant="warning">
                        Warning
                    </Badge>
                </GuidelineBlock>

                <GuidelineBlock title='danger'>
                    <Badge variant="danger">
                        Danger
                    </Badge>
                </GuidelineBlock>

                <GuidelineBlock title='Outline'>
                    <Badge variant="outline">
                        Outline
                    </Badge>
                </GuidelineBlock>

            </div>

        </GuidelineSection>

    );

}