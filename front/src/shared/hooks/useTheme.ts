import { useEffect } from "react";

import type {
    ThemeMode,
} from "@/entities/settings/model";

import {
    THEME_STORAGE_KEY,
} from "@/shared/constants/theme";

export function useTheme(
    theme: ThemeMode,
) {

    useEffect(() => {
        const root = document.documentElement;

        function applyTheme(
            value: ThemeMode,
        ) {
            if (value === "system") {
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
            root.dataset.theme = value;
        }
        applyTheme(theme);
        localStorage.setItem(
            THEME_STORAGE_KEY,
            theme,
        );
    }, [theme]);
}