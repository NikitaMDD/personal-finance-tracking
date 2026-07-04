import {cn} from "@/shared/lib/cn"

interface Props {
    connected: boolean;
}

export function BankStatusBadge({
    connected,
}: Props) {

    return (
        <div
            className={cn(
                `
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                `,
                connected
                    ? `
                    bg-green-100
                    text-green-700
                    `
                    : `
                    bg-slate-100
                    text-slate-600
                    `,
            )}
        >
            {connected
                ? "Подключен"
                : "Не подключен"}
        </div>
    );
}