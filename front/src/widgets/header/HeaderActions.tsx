import { HeaderSearch } from "./HeaderSearch";
import { NotificationButton } from "./NotificationButton";
import { ProfileButton } from "./ProfileButton";

export function HeaderActions() {
    return (
        <div className="flex w-full items-center justify-between gap-4">

            <HeaderSearch />

            <div className="flex items-center justify-between gap-4">
                <NotificationButton />
                <ProfileButton />
            </div>

        </div>
    );
}