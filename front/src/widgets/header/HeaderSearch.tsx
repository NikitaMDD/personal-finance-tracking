import { Search } from "lucide-react";

import { Input } from "@/shared/ui/input";

export function HeaderSearch() {
    return (
        <div className="relative w-80">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[var(--color-text-secondary)]
                    pointer-events-none
                "
            />

            <Input
                placeholder="Поиск..."
                className="pl-11"
            />

        </div>
    );
}