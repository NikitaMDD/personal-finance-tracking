import { Crown } from "lucide-react";

interface Props {
    premium: boolean;
}

export function UserPremiumBadge({
    premium,
}: Props) {

    if (!premium) {
        return null;
    }

    return (

        <div
            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-amber-100
                px-4
                py-2
                text-sm
                font-medium
                text-amber-700
            "
        >
            <Crown size={16} />
            Premium
        </div>
    );
}