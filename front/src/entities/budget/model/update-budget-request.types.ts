export interface UpdateBudgetRequest {

    categoryId: string;

    limitAmount: number;

    period: "WEEK" | "MONTH" | "YEAR";

    startDate: string;

    endDate: string;

}