import { useEffect } from "react";

import {
    type HeaderConfig,
    useUIStore,
} from "@/shared/store/ui.store";

export function useHeader(
    config: HeaderConfig,
) {

    useEffect(() => {

        useUIStore
            .getState()
            .configureHeader(config);

        return () => {

            useUIStore
                .getState()
                .resetHeader();

        };

    }, []);

}