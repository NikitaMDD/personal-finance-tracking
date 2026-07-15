import { FileText } from "lucide-react";

import { Typography } from "@/shared/ui/typography";

interface Props {

    file: File;

}

export function ImportFileInfo({

    file,

}: Props) {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-[var(--color-border)]
                p-4
            "
        >

            <FileText size={28} />

            <div>

                <Typography variant="h3">

                    {file.name}

                </Typography>

                <Typography
                    className="
                        text-[var(--color-text-secondary)]
                    "
                >

                    {(file.size / 1024).toFixed(1)} KB

                </Typography>

            </div>

        </div>

    );

}