interface Props {

    income: number;

    expenses: number;

}

export function FinancialActivityBar({

    income,

    expenses,

}: Props) {

    const total =
        income + expenses;

    const incomePercent =
        total === 0
            ? 0
            : income / total * 100;

    return (

        <div
            className="
                mt-8
                h-3
                overflow-hidden
                rounded-full
                bg-[var(--color-surface-secondary)]
            "
        >

            <div
                className="
                    h-full
                    rounded-full
                    bg-[var(--color-success)]
                    transition-all
                "
                style={{
                    width: `${incomePercent}%`,
                }}
            />

        </div>

    );

}