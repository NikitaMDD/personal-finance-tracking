import { api } from "@/shared/api/client/http";

import type {
    DashboardAccountResponse,
} from "../model/dashboard-account.types";

import type {
    ConnectBankRequest,
} from "@/features/bank-connection/model/connect-bank.types";

import type {
    BankConnectionResponse,
} from "../model/bank-connection.types";

export const bankConnectionApi = {

    dashboard() {

        return api<DashboardAccountResponse[]>(
            "/bank-connections/dashboard",
        );

    },

    connect(
        data: ConnectBankRequest,
    ) {

        return api<void>(
            "/bank-connections",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

    },

    findAll() {

        return api<BankConnectionResponse[]>(
            "/bank-connections",
        );

    },

    disconnect(
        id: string,
    ) {

        return api<void>(
            `/bank-connections/${id}`,
            {
                method: "DELETE",
            },
        );

    },

};