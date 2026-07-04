import { motion } from "framer-motion";

import { Card } from "@/shared/ui/card";
import { Avatar } from "@/shared/ui/avatar";
import { Stack } from "@/shared/ui/stack";

import type {
    UserProfile,
} from "@/entities/profile/model";

import { UserInfo } from "./UserInfo";
import { UserPremiumBadge } from "./UserPremiumBadge";

interface Props {
    profile: UserProfile;
}

export function UserCard({
    profile,
}: Props) {
    return (
        <motion.div
            layout
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: .3,
            }}
        >
            <Card
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    p-8
                "
            >
                <motion.div
                    className="
                        pointer-events-none
                        absolute
                        -top-24
                        -right-24
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--color-primary)]
                        opacity-[0.06]
                        blur-3xl
                    "
                    animate={{
                        scale: [1, 1.08, 1],
                        x: [0, -8, 0],
                        y: [0, 6, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-28
                        -left-20
                        h-56
                        w-56
                        rounded-full
                        bg-[#22C55E]
                        opacity-[0.05]
                        blur-3xl
                    "
                    animate={{
                        scale: [1, 1.06, 1],
                        x: [0, 6, 0],
                        y: [0, -8, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div
                    className="
                        relative
                        flex
                        flex-col
                        gap-8
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >
                    <Stack
                        direction="row"
                        align="center"
                        gap="xl"
                    >
                        <Avatar
                            size="xl"
                            src={profile.avatar}
                            name={`${profile.firstName} ${profile.lastName}`}
                            className="
                                bg-gradient-to-br
                                from-[var(--color-primary)]
                                to-[var(--color-primary-hover)]
                                text-white
                                shadow-xl
                                ring-4
                                ring-white
                            "
                        />

                        <div>
                            <UserInfo
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                role={profile.role}
                                email={profile.email}
                            />

                            <div className="mt-5">
                                <UserPremiumBadge
                                    premium={profile.premium}
                                />
                            </div>
                        </div>
                    </Stack>
                </div>
            </Card>
        </motion.div>
    );
}