import { Bell } from "lucide-react";

import { Card } from "@/shared/ui/card";

import type {
    AppSettings,
} from "@/entities/settings/model";

import { SettingsSectionHeader } from "../common/SettingsSectionHeader";
import { NotificationItem } from "./NotificationItem";

interface Props {

    settings: AppSettings;

    onNotificationsChange(
        notifications: Partial<
            AppSettings["notifications"]
        >,
    ): void;

}

export function NotificationsCard({

    settings,

    onNotificationsChange,

}: Props) {

    return (

        <Card
            className="
                rounded-3xl
                p-8
            "
        >

            <SettingsSectionHeader
                icon={Bell}
                title="Уведомления"
                description="
                    Выберите, какие уведомления
                    вы хотите получать.
                "
            />

            <div className="mt-8">

                <NotificationItem
                    title="Email"
                    helperText="
                        Получать уведомления
                        на электронную почту.
                    "
                    checked={
                        settings.notifications.email
                    }
                    onCheckedChange={checked =>
                        onNotificationsChange({
                            email: checked,
                        })
                    }
                />

                <NotificationItem
                    title="Push"
                    helperText="
                        Получать push-уведомления
                        в браузере.
                    "
                    checked={
                        settings.notifications.push
                    }
                    onCheckedChange={checked =>
                        onNotificationsChange({
                            push: checked,
                        })
                    }
                />

                <NotificationItem
                    title="Контроль бюджета"
                    helperText="
                        Получать уведомления
                        при превышении бюджета.
                    "
                    checked={
                        settings.notifications.budget
                    }
                    onCheckedChange={checked =>
                        onNotificationsChange({
                            budget: checked,
                        })
                    }
                />

            </div>

        </Card>

    );

}