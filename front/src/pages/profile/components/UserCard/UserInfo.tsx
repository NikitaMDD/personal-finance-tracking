import { Typography } from "@/shared/ui/typography";

interface Props {
    firstName: string;
    lastName: string;
    role: string;
    email: string;
}

export function UserInfo({
    firstName,
    lastName,
    role,
    email,
}: Props) {

    return (

        <div>
            <Typography variant="h1">

                {firstName} {lastName}

            </Typography>

            <Typography
                className="
                    mt-2
                    text-[var(--color-text-secondary)]
                "
            >
                {role}
            </Typography>

            <Typography
                className="
                    mt-1
                    text-[var(--color-text-secondary)]
                "
            >
                {email}
            </Typography>
        </div>
    );
}