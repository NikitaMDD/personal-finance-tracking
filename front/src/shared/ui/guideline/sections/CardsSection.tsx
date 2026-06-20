import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/shared/ui/card";

import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineGrid } from "../components/GuidelineGrid";
import { GuidelineSection } from "../components/GuidelineSection";

export function CardsSection() {
    return (
        <GuidelineSection title="Cards">
            <GuidelineGrid>

                <GuidelineBlock title="Default Card">
                    <Card>
                        <CardHeader>
                            <Typography variant="h3">
                                Card Title
                            </Typography>
                        </CardHeader>

                        <CardContent>
                            <Typography variant="body">
                                Card content example
                            </Typography>
                        </CardContent>
                    </Card>
                </GuidelineBlock>

                <GuidelineBlock title="Card With Footer">
                    <Card>
                        <CardHeader>
                            <Typography variant="h3">
                                Finance Card
                            </Typography>
                        </CardHeader>

                        <CardContent>
                            <Typography variant="body">
                                Balance information
                            </Typography>
                        </CardContent>

                        <CardFooter>
                            <Button fullWidth>
                                Continue
                            </Button>
                        </CardFooter>
                    </Card>
                </GuidelineBlock>

            </GuidelineGrid>
        </GuidelineSection>
    );
}