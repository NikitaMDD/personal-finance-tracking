import {
    CircleHelp,
} from "lucide-react";

import { Card } from "@/shared/ui/card";
import { InfoRow } from "@/shared/ui/info-row";

import {
    SettingsSectionHeader,
} from "../common/SettingsSectionHeader";

interface Props {
    version: string;
}

export function AboutCard({
    version,
}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >
            <SettingsSectionHeader
                icon={CircleHelp}
                title="О приложении"
                description="
                    Информация о текущей версии
                    приложения.
                "
            />
            <div
                className="
                    mt-8
                    space-y-6
                "
            >
                <InfoRow
                    label="Версия"
                    value={version}
                />
                <InfoRow
                    label="Frontend"
                    value="React 19"
                />
                <InfoRow
                    label="Backend"
                    value="Spring Boot"
                />
                <InfoRow
                    label="База данных"
                    value="PostgreSQL"
                />
            </div>
        </Card>
    );
}