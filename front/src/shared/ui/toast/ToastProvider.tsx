import {
    useCallback,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";

import {
    ToastContext,
} from "./ToastContext";

import type {
    ToastItem,
} from "./toast.types";

import * as RadixToast from "@radix-ui/react-toast";

import { AnimatePresence } from "framer-motion";

import { Toast } from "./Toast";
import { ToastViewport } from "./ToastViewport";

export function ToastProvider({
    children,
}: PropsWithChildren) {

    const [
        toasts,
        setToasts,
    ] = useState<
        ToastItem[]
    >([]);

    const addToast =
        useCallback(
            (
                title: string,
                variant: ToastItem["variant"],
                description?: string,
            ) => {
                const id =
                    crypto.randomUUID();

                setToasts(
                    previous => [
                        ...previous,
                        {
                            id,
                            title,
                            description,
                            variant,
                        },
                    ],
                );
                setTimeout(() => {
                    setToasts(
                        previous =>
                            previous.filter(
                                toast =>
                                    toast.id !== id,
                            ),
                    );
                }, 5000);
            },
            [],
        );

    const remove =
        useCallback(
            (
                id: string,
            ) => {
                setToasts(
                    previous =>
                        previous.filter(
                            toast =>
                                toast.id !== id,
                        ),
                );
            },
            [],
        );

    const value =
        useMemo(
            () => ({
                toasts,
                success(
                    title: string,
                    description?: string,
                ) {
                    addToast(
                        title,
                        "success",
                        description,
                    );
                },
                error(
                    title: string,
                    description?: string,
                ) {
                    addToast(
                        title,
                        "error",
                        description,
                    );
                },
                warning(
                    title: string,
                    description?: string,
                ) {
                    addToast(
                        title,
                        "warning",
                        description,
                    );
                },
                info(
                    title: string,
                    description?: string,
                ) {
                    addToast(
                        title,
                        "info",
                        description,
                    );
                },
                remove,
            }),
            [
                toasts,
                addToast,
                remove,
            ],
        );

    return (
        <ToastContext.Provider
            value={value}
        >
            <RadixToast.Provider>
                {children}
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            toast={toast}
                            onClose={() =>
                                remove(toast.id)
                            }
                        />
                    ))}
                </AnimatePresence>
                <ToastViewport />
            </RadixToast.Provider>
        </ToastContext.Provider>
    );
}