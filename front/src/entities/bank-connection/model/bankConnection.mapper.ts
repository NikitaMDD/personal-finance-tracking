import type {
    BankConnectionResponse,
} from "./bank-connection.types";

import type {
    ConnectedBank,
} from "@/entities/profile/model";

export function toConnectedBank(
    bank: BankConnectionResponse,
): ConnectedBank {

    return {

        id: bank.id,

        title: bank.bankName,

        logo: bank.logo,

        connected: bank.connected,

    };

}