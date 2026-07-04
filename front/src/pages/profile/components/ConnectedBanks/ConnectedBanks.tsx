import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";

import type {
    ConnectedBank,
} from "@/entities/profile/model";

import { BankCard } from "./BankCard";

interface Props {
    banks: ConnectedBank[];
    onConnect(
        id: string,
    ): void;
    onManage(
        bank: ConnectedBank,
    ): void;
}

export function ConnectedBanks({
    banks,
    onConnect,
    onManage,
}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >
            <Typography variant="h2">
                Подключенные банки
            </Typography>

            <Typography
                className="
                    mt-2
                    text-[var(--color-text-secondary)]
                "
            >
                Управляйте подключенными банковскими
                счетами.
            </Typography>

            <div
                className="
                    mt-8
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {banks.map(bank => (
                    <BankCard
                        key={bank.id}
                        bank={bank}
                        onConnect={onConnect}
                        onManage={onManage}
                    />
                ))}
            </div>
        </Card>
    );
}