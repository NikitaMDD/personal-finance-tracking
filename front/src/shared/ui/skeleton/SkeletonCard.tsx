import { Skeleton } from "./Skeleton";
import { SkeletonText } from "./SkeletonText";

export function SkeletonCard() {

    return (

        <div
            className="
                rounded-3xl
                border
                border-[var(--color-border)]
                bg-white
                p-6
            "
        >

            <div className="flex items-center gap-4">
                <Skeleton
                    className="h-12 w-12 rounded-xl"
                />
                <div className="flex-1">
                    <Skeleton className="mb-2 h-5 w-40" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>

            <div className="my-6">
                <SkeletonText lines={2} />
            </div>

            <Skeleton className="h-10 w-full rounded-xl" />

        </div>

    );

}