export function randomBetween(
    random: () => number,
    min: number,
    max: number,
) {

    return Math.floor(
        random() * (max - min + 1),
    ) + min;

}