export const ACCOUNT_CARD_SIZES = {
    sm: {
        card: "w-72 h-44",
        logoContainer: "w-20 h-8",
        iconSize: 28,
        balanceVariant: "h2",
    },

    md: {
        card: "w-80 h-48",
        logoContainer: "w-24 h-10",
        iconSize: 36,
        balanceVariant: "display",
    },

    lg: {
        card: "w-117 h-71",
        logoContainer: "w-32 h-14",
        iconSize: 42,
        balanceVariant: "display",
    },
} as const;

export type AccountCardSize = keyof typeof ACCOUNT_CARD_SIZES;