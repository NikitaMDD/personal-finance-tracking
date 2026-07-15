
export interface ConnectedBank {

    id: string;

    bankId: string;

    title: string;

    logo: string;

    color: string;

    externalAccountId: string;

    connected: boolean;

    connectedAt: string;

}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatarUrl?: string;
    role: string;
    premium: boolean;
}

export interface ProfileStatistics {
    accounts: number;
    categories: number;
    budgets: number;
    operations: number;
    income: number;
    expenses: number;
    balance: number;
}

export interface SecurityInfo {
    lastLogin: string;
    twoFactorEnabled: boolean;
}