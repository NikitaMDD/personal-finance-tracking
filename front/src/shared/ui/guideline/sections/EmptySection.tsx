import { Empty } from "@/shared/ui/empty";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import {
    WalletMinimal,
} from "lucide-react";

import { GuidelineBlock } from "../components/GuidelineBlock";
import { GuidelineSection } from "../components/GuidelineSection";

export function EmptySection() {

    return (

        <GuidelineSection title="Empty">

            <GuidelineBlock title="Примеры empty состояний">

                <Empty
                    title="Нет данных"
                />

                <Empty
                    title="Нет операций"
                    description="Добавьте первую операцию, чтобы увидеть историю транзакций."
                />

                <Empty
                    icon={
                        <WalletMinimal
                            size={30}
                        />
                    }
                    title="Нет счетов"
                    description="Создайте первый счет для начала работы."
                    action={
                        <Button>
                            Добавить счет
                        </Button>
                    }
                />
            </GuidelineBlock>
        </GuidelineSection>
    );
}