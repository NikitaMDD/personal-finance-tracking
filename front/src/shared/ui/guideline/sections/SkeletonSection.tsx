import {
    Skeleton,
    SkeletonAvatar,
    SkeletonCard,
    SkeletonTableRow,
    SkeletonText,
} from "@/shared/ui/skeleton";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function SkeletonSection() {

    return (

        <GuidelineSection title="Skeleton">
            <div className="space-y-8">
                <GuidelineBlock title={'Base'}>
                    <div className="flex gap-4">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-10 w-48" />
                    </div>
                </GuidelineBlock>

                <GuidelineBlock title={'Text'}>
                    <SkeletonText />
                </GuidelineBlock>

                <GuidelineBlock title={'Avatar'}>
                    <SkeletonAvatar />
                </GuidelineBlock>

                <GuidelineBlock title={'Card'}>
                    <SkeletonCard />
                </GuidelineBlock>

                <GuidelineBlock title={'Table Row'}>
                    <SkeletonTableRow />
                </GuidelineBlock>
            </div>
        </GuidelineSection>

    );

}