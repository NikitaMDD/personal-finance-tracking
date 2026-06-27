import { Search } from "lucide-react";

import { Input } from "@/shared/ui/input";
import { useUIStore } from "@/shared/store/ui.store";

export function HeaderSearch() {

    const {
        header,
        searchValue,
        setSearchValue,
    } = useUIStore();

    if (!header.search.visible) {
        return null;
    }

    return (
        <div className="relative w-80">

            <Search
                size={18}
                className="
                    pointer-events-none
                    absolute
                    top-1/2
                    left-4
                    -translate-y-1/2
                    text-[var(--color-text-secondary)]
                "
            />

            <Input
                value={searchValue}
                onChange={(event) =>
                    setSearchValue(event.target.value)
                }
                placeholder={
                    header.search.placeholder
                }
                className="pl-11"
            />

        </div>
    );
}