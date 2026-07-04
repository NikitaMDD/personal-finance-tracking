import { Dialog } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";

import type {
    ConnectedBank,
} from "@/entities/profile/model";

interface Props {

    open: boolean;

    bank: ConnectedBank | null;

    onDisconnect(
        id: string,
    ): void;

    onOpenChange(
        open: boolean,
    ): void;

}

export function ManageBankDialog({

    open,

    bank,

    onDisconnect,

    onOpenChange,

}: Props) {

    if (!bank) {
        return null;
    }

    return (

        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title={bank.title}
            description="Управление подключением банка."
        >

            <Typography>
                Статус:
                {" "}
                <strong>
                    {bank.connected
                        ? "Подключен"
                        : "Не подключен"}
                </strong>
            </Typography>

            <Stack
                direction="row"
                justify="end"
                gap="md"
                className="mt-8"
            >

                <Button
                    variant="secondary"
                    onClick={() =>
                        onOpenChange(false)
                    }
                >
                    Закрыть
                </Button>

                {bank.connected && (

                    <Button
                        variant="danger"
                        onClick={() => {

                            onDisconnect(
                                bank.id,
                            );

                            onOpenChange(false);

                        }}
                    >
                        Отключить банк
                    </Button>

                )}

            </Stack>

        </Dialog>

    );

}