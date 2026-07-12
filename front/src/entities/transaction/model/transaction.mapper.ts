import type { Transaction } from "./transaction.types";
import type { TransactionResponse } from "./transaction-response.types";

export function toTransaction(
    transaction: TransactionResponse,
): Transaction {

    return {

        id: transaction.id,

        accountId:
            transaction.bankConnectionId ?? "",

        categoryId:
            transaction.categoryId,

        title:
            transaction.title,

        description:
            transaction.description ?? undefined,

        amount:
            transaction.amount,

        currency: "RUB",

        type:
            transaction.type === "INCOME"
                ? "income"
                : "expense",

        date:
            transaction.transactionDate,

    };
}