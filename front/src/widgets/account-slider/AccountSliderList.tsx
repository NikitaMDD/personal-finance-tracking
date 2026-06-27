import { motion } from "framer-motion";

import {
    AccountCard,
} from "@/entities/account/ui";

import {
    accountsMock,
    type Account,
} from "@/entities/account/model";

import type {
    AccountSliderController,
} from "./hooks/useAccountSlider";

import { useEffect } from "react";

interface Props {

    slider: AccountSliderController;

    accounts: Account[];

    selectedAccount: Account;

    onSelectAccount(
        account: Account,
    ): void;
}

export function AccountSliderList({
    accounts,
    slider,
    onSelectAccount,
}: Props) {

    useEffect(() => {
        onSelectAccount(
            accounts[
                slider.activeIndex
            ],
        );
    }, [
        slider.activeIndex,
        accounts,
        onSelectAccount,
    ]);

    return (
        <div
            ref={slider.refs.containerRef}
            className="
                overflow-hidden
                select-none
                pb-[15px]
            "
        >
            <motion.div
                ref={slider.refs.sliderRef}
                style={{
                    x: slider.motion.x,
                }}
                drag="x"
                dragConstraints={
                    slider.drag.constraints
                }
                dragElastic={0.08}
                dragMomentum={false}
                whileTap={{
                    cursor: "grabbing",
                }}
                onDragEnd={slider.onDragEnd}
                className="
                    flex
                    gap-3
                    cursor-grab
                "
            >
                {accounts.map((account, index) => (
                    <motion.div
                        key={account.id}
                        animate={{
                            scale:
                                slider.activeIndex === index
                                    ? 1
                                    : .94,
                            opacity:
                                slider.activeIndex === index
                                    ? 1
                                    : .65,
                        }}
                    >
                        <AccountCard
                            account={account}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}