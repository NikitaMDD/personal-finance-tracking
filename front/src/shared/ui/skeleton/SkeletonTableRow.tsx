import { Skeleton } from "./Skeleton";

export function SkeletonTableRow() {

    return (
        <div
            className="
                flex
                items-center
                gap-4
                py-4
            "
        >
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
        </div>
    );

}