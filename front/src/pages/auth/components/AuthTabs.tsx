import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

// import { toast } from "sonner";

import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

type AuthTab = "login" | "register";

export function AuthTabs() {
    const [activeTab, setActiveTab] =
        useState<AuthTab>("login");

    const [emailAfterRegister, setEmailAfterRegister] =
        useState("");

    return (
        <div className="w-full">

            <div
                className="
                    relative
                    mb-6
                    grid
                    grid-cols-2
                    rounded-[var(--radius-md)]
                    bg-[var(--color-surface-secondary)]
                    p-1
                "
            >
                <button
                    onClick={() =>
                        setActiveTab("login")
                    }
                    className="
                        relative
                        z-10
                        py-2
                        text-sm
                        font-medium
                    "
                >
                    {activeTab === "login" && (
                        <motion.div
                            layoutId="active-tab"
                            className="
                                absolute
                                inset-0
                                rounded-[var(--radius-sm)]
                                bg-[var(--color-surface)]
                                shadow-sm
                            "
                            transition={{
                                duration: 0.2,
                            }}
                        />
                    )}

                    <span className="relative">
                        Вход
                    </span>
                </button>

                <button
                    onClick={() =>
                        setActiveTab("register")
                    }
                    className="
                        relative
                        z-10
                        py-2
                        text-sm
                        font-medium
                    "
                >
                    {activeTab === "register" && (
                        <motion.div
                            layoutId="active-tab"
                            className="
                                absolute
                                inset-0
                                rounded-[var(--radius-sm)]
                                bg-[var(--color-surface)]
                                shadow-sm
                            "
                            transition={{
                                duration: 0.2,
                            }}
                        />
                    )}

                    <span className="relative">
                        Регистрация
                    </span>
                </button>
            </div>

            <motion.div
                layout
                transition={{
                    layout: {
                        duration: 0.25,
                    },
                }}
            >
                <AnimatePresence mode="wait">
                    {activeTab === "login" ? (
                        <motion.div
                            key="login"
                            layout
                            initial={{
                                opacity: 0,
                                x: -10,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: 10,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <LoginForm
                                initialEmail={
                                    emailAfterRegister
                                }
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            layout
                            initial={{
                                opacity: 0,
                                x: 10,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -10,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <RegisterForm
                                onSuccess={(email) => {
                                    setEmailAfterRegister(
                                        email,
                                    );
                                    setActiveTab("login");
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}