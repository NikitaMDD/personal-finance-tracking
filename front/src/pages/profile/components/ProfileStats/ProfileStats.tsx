import type {
    ProfileStatistics,
} from "@/entities/profile/model";

import {
    profileStatsConfig,
} from "./profileStats.config";

import {
    ProfileStatCard,
} from "./ProfileStatCard";

import { cn } from "@/shared/lib/cn";

interface Props {
    statistics: ProfileStatistics;
}

export function ProfileStats({
    statistics,
}: Props) {

    return (

        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            {profileStatsConfig.map(stat => (
                <div
                    key={stat.key}
                    className={cn(

                        stat.featured &&
                        "md:row-span-2",

                    )}
                >
                    <ProfileStatCard
                        icon={stat.icon}
                        label={stat.label}
                        value={
                            statistics[
                                stat.key
                            ]
                        }
                        featured={
                            stat.featured
                        }
                    />
                </div>
            ))}
        </div>
    );
}