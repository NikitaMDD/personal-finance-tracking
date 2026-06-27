import { useEffect } from "react";

import {
    type HeaderConfig,
    useUIStore,
} from "@/shared/store/ui.store";

export function useHeader(
    config: Partial<HeaderConfig>,
) {

    const configureHeader =
        useUIStore(
            (state) => state.configureHeader,
        );

    const resetHeader =
        useUIStore(
            (state) => state.resetHeader,
        );

    useEffect(() => {

        configureHeader(config);

        return () => {
            resetHeader();
        };

    }, [
        config,
        configureHeader,
        resetHeader,
    ]);
}