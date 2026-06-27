export type AccountType = 
    | 'bank'
    | 'cash'
    | 'investment'
    | 'crypto'

export type BankName = 
    | 'СберБанк'
    | 'Т-Банк'
    | 'Альфа-Банк'
    | 'Райффайзенбанк'
    | 'ВТБ';

export type Currency = 
    | "RUB"
    | "USD"
    | "EUR"

export type BankNameId = 
    | "sber"
    | "tbank"
    | "alfa"
    | "raiffeisen"
    | "vtb";

import type { LucideIcon } from "lucide-react";

export type AccountMedia =
    | {
          type: "image";
          value: string;
      }
    | {
          type: "icon";
          value: LucideIcon;
      };

export interface AccountMeta {
    title: string;
    media: AccountMedia;
    color: string;
    footer: string;
}

export interface Account {
    id: string;
    title: string;
    type: AccountType;
    bank?: BankNameId;
    balance: number;
    currency: Currency;
    lastCardNumbers?: string;
    isMain?: boolean;
    isAggregate?: boolean;
}