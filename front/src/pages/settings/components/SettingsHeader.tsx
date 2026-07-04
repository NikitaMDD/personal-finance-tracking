import { Typography } from "@/shared/ui/typography";

export function SettingsHeader() {

    return (
        <div
            className="
                mb-10
            "
        >
            <Typography
                variant="display"
            >
                Настройки
            </Typography>

            <Typography
                className="
                    mt-3
                    max-w-2xl
                    text-[var(--color-text-secondary)]
                "
            >
                Настройте внешний вид приложения,
                безопасность аккаунта, уведомления
                и финансовые параметры.
            </Typography>
        </div>
    );
}