export interface CreateBudgetRequest {

    categoryId: string;

    limitAmount: number;

    period: "WEEK" | "MONTH" | "YEAR";

    startDate: string;

    endDate: string;

}