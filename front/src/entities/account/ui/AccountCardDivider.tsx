
interface DividerCardProps {
    color: string;
}

export function AccountCardDivider({
    color
}: DividerCardProps) {
    return (
        <div
            className="my-5 h-[2px] rounded-full"
            style={{
                backgroundColor: color,
            }}
        />
    )
}
