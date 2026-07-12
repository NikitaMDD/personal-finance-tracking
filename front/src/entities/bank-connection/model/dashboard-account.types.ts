import type {
    BankNameId,
    Currency,
} from "@/entities/account/model";

export interface DashboardAccountResponse {
    id: string;
    title: string;
    bankCode: BankNameId;
    logo: string;
    color: string;
    balance: number;
    currency: Currency;
    lastCardNumbers?: string;
    isMain: boolean;
}