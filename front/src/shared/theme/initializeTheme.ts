import {
    THEME_STORAGE_KEY,
} from "@/shared/constants/theme";

export function initializeTheme() {

    const root =
        document.documentElement;

    const theme =
        localStorage.getItem(
            THEME_STORAGE_KEY,
        );

    if (!theme) {
        return;
    }

    if (theme === "system") {

        const prefersDark =
            window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;

        root.dataset.theme =
            prefersDark
                ? "dark"
                : "light";

        return;
    }

    root.dataset.theme = theme;

}