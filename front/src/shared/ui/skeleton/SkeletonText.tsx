import { Skeleton } from "./Skeleton";

interface SkeletonTextProps {
    lines?: number;
}

export function SkeletonText({
    lines = 3,
}: SkeletonTextProps) {

    return (
        <div className="space-y-2">
            {Array.from({
                length: lines,
            }).map((_, index) => (

                <Skeleton
                    key={index}
                    className={
                        index === lines - 1
                            ? "h-4 w-3/4"
                            : "h-4 w-full"
                    }
                />
            ))}
        </div>
    );

}