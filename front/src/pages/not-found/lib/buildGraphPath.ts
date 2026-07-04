export function buildGraphPath(
    points: [number, number][],
) {

    return points.reduce(
        (
            path,
            [x, y],
            index,
        ) =>

            index === 0
                ? `M ${x} ${y}`
                : `${path} L ${x} ${y}`,

        "",
    );

}