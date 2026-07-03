import { useHeader } from "@/shared/hooks/useHeader";

import {
    AnalyticsSummary,
} from "@/widgets/analytics/charts/analytics-summary";

import {
    ExpensesPieChart,
} from "@/widgets/analytics/charts/expenses-pie-chart";

import {
    AnalyticsHeader,
    AnalyticsFilters,
} from "./components";

import {
    useAnalytics,
} from "./hooks/useAnalytics";
import { ExpensesLineChart } from "@/widgets/analytics/charts/expenses-line-chart/ExpensesLineChart";
import { TopCategories } from "@/widgets/analytics/top-categories/TopCategories";
import { IncomeExpenseBarChart } from "@/widgets/analytics/charts/income-expense-bar-chart/IncomeExpenseBarChart";
import { AnimatePresence, motion } from "framer-motion";

export function AnalyticsPage() {

    useHeader({
        search: {
            visible: false,
            placeholder: "",
        },
    });

    const analytics =
        useAnalytics();

    return (
            <motion.div
                className="space-y-8"
            >
                <AnalyticsHeader />

                <AnalyticsFilters
                    value={analytics.period}
                    onChange={
                        analytics.setPeriod
                    }
                />

                <AnalyticsSummary
                    summary={
                        analytics.summary
                    }
                />

                <ExpensesPieChart
                    categories={analytics.categories}
                    hoveredCategory={
                        analytics.hoveredCategory
                    }
                    onHoverCategory={
                        analytics.setHoveredCategory
                    }
                />

                <ExpensesLineChart
                    data={analytics.daily}
                    hoveredCategory={
                        analytics.hoveredCategory
                    }
                />

                <IncomeExpenseBarChart
                    data={
                        analytics.monthly
                    }
                />


                <TopCategories
                    categories={analytics.categories}
                    hoveredCategory={
                        analytics.hoveredCategory
                    }
                    onHoverCategory={
                        analytics.setHoveredCategory
                    }
                />
            </motion.div>
    );
}