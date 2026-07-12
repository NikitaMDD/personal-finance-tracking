import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";

import { Plus } from "lucide-react";

interface Props {
    onCreate(): void;
}

export function TransactionsHeader({
    onCreate,
}: Props) {

    return (

        <div
            className="
                flex
                flex-col
                gap-6

                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >

            <div>

                <Typography
                    as="h1"
                    variant="h1"
                >
                    Транзакции
                </Typography>

                <Typography
                    variant="body"
                    className="
                        mt-2
                        text-[var(--color-text-secondary)]
                    "
                >
                    Все операции по вашим счетам
                </Typography>

            </div>

            <Button
                startContent={
                    <Plus size={18} />
                }
                onClick={onCreate}
            >
                Добавить операцию
            </Button>

        </div>

    );

}