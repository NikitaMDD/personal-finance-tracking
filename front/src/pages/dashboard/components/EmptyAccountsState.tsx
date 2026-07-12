import { Landmark } from "lucide-react";
import { Empty } from "@/shared/ui/empty";

interface Props {
    onConnectBank(): void;
}

export function EmptyAccountsState({
    onConnectBank,
}: Props) {

    return (

        <Empty
            icon={
                <Landmark
                    size={30}
                    className="
                        text-[var(--color-primary)]
                    "
                />
            }
            title="Нет подключённых банков"
            description="
                Подключите первый банковский счёт,
                чтобы начать учитывать доходы,
                расходы и анализировать финансы.
            "
            action="Подключить банк"
            onAction={onConnectBank}
        />
    );
}