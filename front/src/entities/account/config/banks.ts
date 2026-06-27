import AlfaLogo from "@/shared/assets/banks/alfa.svg";
import RaiffeisenLogo from "@/shared/assets/banks/raiffeisen.svg";
import SberLogo from "@/shared/assets/banks/sber.svg";
import TBankLogo from "@/shared/assets/banks/tbank.svg";
import VtbLogo from "@/shared/assets/banks/vtb.svg";

import type { BankNameId } from "../model/account.types";

export interface BankInfo {
    title: string;
    logo: string;
    color: string;
}

export const BANKS: Record<BankNameId, BankInfo> = {
    sber: {
        title: "СберБанк",
        logo: SberLogo,
        color: "#1E9C3A",
    },

    tbank: {
        title: "Т-Банк",
        logo: TBankLogo,
        color: "#F8D62B",
    },

    alfa: {
        title: "Альфа-Банк",
        logo: AlfaLogo,
        color: "#E73122",
    },

    raiffeisen: {
        title: "Райффайзенбанк",
        logo: RaiffeisenLogo,
        color: "#F5E801",
    },

    vtb: {
        title: "ВТБ",
        logo: VtbLogo,
        color: "#04A5F6",
    },
};