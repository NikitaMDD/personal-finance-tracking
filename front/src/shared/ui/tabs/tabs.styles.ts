import { cva } from "class-variance-authority";

export const tabsListStyles = cva(`
    inline-flex
    rounded-2xl
    bg-[var(--color-surface-secondary)]
    p-1
`);

export const tabsTriggerStyles = cva(
    `
        rounded-xl
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        data-[state=active]:bg-[var(--color-surface)]
        data-[state=active]:shadow
    `,
);