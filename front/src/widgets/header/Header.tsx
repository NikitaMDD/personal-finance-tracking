import { HeaderActions } from "./HeaderActions";

export function Header() {
    return (
        <header
            className="
                flex
                h-20
                items-center
                justify-between
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                rounded-3xl
                ml-[6px]
                mr-[12px]
                px-8
            "
        >

            <HeaderActions/>

        </header>
    );
}