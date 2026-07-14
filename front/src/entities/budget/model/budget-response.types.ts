export interface BudgetResponse {

    id: string;

    categoryId: string;

    categoryName: string;

    categoryIcon: string;

    categoryColor: string;

    limitAmount: number;

    spentAmount: number;

    period: "WEEK" | "MONTH" | "YEAR";

    startDate: string;

    endDate: string;

}