export function formatDate(
    date: string,
) {
    const transactionDate = new Date(date);
    const today = new Date();
    const yesterday = new Date();

    yesterday.setDate(
        yesterday.getDate() - 1,
    );

    if (
        transactionDate.toDateString() ===
        today.toDateString()
    ) {
        return "Сегодня";
    }

    if (
        transactionDate.toDateString() ===
        yesterday.toDateString()
    ) {
        return "Вчера";
    }

    return transactionDate.toLocaleDateString(
        "ru-RU",
    );
}