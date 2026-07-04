import {
    Shield,
} from "lucide-react";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Stack } from "@/shared/ui/stack";
import { Typography } from "@/shared/ui/typography";
import { Switch } from "@/shared/ui/switch";

import type {
    SecurityInfo,
} from "@/entities/profile/model";

import {
    SettingsSectionHeader,
} from "../common/SettingsSectionHeader";

interface Props {

    security: SecurityInfo;

    onTwoFactorChange(
        value: boolean,
    ): void;

    onChangePassword(): void;

    onLogout(): void;

}

export function SecurityCard({

    security,

    onTwoFactorChange,

    onChangePassword,

    onLogout,

}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >

            <SettingsSectionHeader

                icon={Shield}

                title="Безопасность"

                description="
                    Управление безопасностью
                    вашего аккаунта.
                "

            />

            <div className="mt-8">

                <Typography
                    variant="h3"
                >
                    Последний вход
                </Typography>

                <Typography
                    className="
                        mt-1
                        text-[var(--color-text-secondary)]
                    "
                >
                    {security.lastLogin}
                </Typography>

            </div>

            <div className="mt-8">

                <Switch

                    label="Двухфакторная аутентификация"

                    helperText="
                        Дополнительная защита
                        вашей учетной записи.
                    "

                    checked={
                        security.twoFactorEnabled
                    }

                    onCheckedChange={
                        onTwoFactorChange
                    }

                />

            </div>

            <Stack

                direction="row"

                justify="end"

                gap="md"

                className="mt-10"

            >

                <Button

                    variant="secondary"

                    onClick={
                        onChangePassword
                    }

                >

                    Изменить пароль

                </Button>

                <Button

                    variant="danger"

                    onClick={onLogout}

                >

                    Выйти

                </Button>

            </Stack>

        </Card>

    );

}