import { useState } from "react";

import { Tabs } from "@/shared/ui/tabs";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function TabsSection() {

    const [value, setValue] =
        useState("month");

    return (
        <GuidelineSection title="Tabs">
            <div className="flex flex-wrap gap-6">
                <GuidelineBlock title="Tabs">
                    <Tabs
                        value={value}
                        onChange={setValue}
                        items={[
                            {
                                value: "week",
                                label: "Неделя",
                            },
                            {
                                value: "month",
                                label: "Месяц",
                            },
                            {
                                value: "year",
                                label: "Год",
                            },
                            {
                                value: "all",
                                label: "Все время",
                            },
                      ]}
                    />
                </GuidelineBlock>
            </div>
        </GuidelineSection>
    );
}