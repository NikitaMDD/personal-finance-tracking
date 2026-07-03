import { Card } from "@/shared/ui/card";

import type {
    BudgetOverview,
} from "@/entities/budget/model";

import { BudgetProgress } from "./BudgetProgress";
import { BudgetStat } from "./BudgetStat";

import {
    Coins,
    Target,
    Wallet,
} from "lucide-react";

interface Props {
    overview: BudgetOverview;
}

export function BudgetStatsCard({
    overview,
}: Props) {

    return (

        <Card className="rounded-3xl p-8">
            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-3
                "
            >
                <BudgetStat
                    label="Использовано"
                    value={overview.totalSpent}
                    icon={
                        <Coins
                            size={18}
                            className="text-red-500"
                        />
                    }
                />

                <BudgetStat
                    label="Осталось"
                    value={overview.totalRemaining}
                    icon={
                        <Wallet
                            size={18}
                            className="text-green-500"
                        />
                    }
                />

                <BudgetStat
                    label="Лимит"
                    value={overview.totalLimit}
                    icon={
                        <Target
                            size={18}
                            className="text-blue-500"
                        />
                    }
                />
            </div>
        </Card>
    );
}