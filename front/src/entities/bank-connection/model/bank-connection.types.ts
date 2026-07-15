export interface BankConnectionResponse {
    id: string;
    bankId: string;
    bankCode: string;
    bankName: string;
    logo: string;
    color: string;
    externalAccountId: string;
    connected: boolean;
    connectedAt: string;
}