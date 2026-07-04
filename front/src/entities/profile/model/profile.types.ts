
export interface ConnectedBank {
    id: string;
    title: string;
    logo: string;
    connected: boolean;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar?: string;
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