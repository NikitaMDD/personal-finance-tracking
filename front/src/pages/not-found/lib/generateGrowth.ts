import { seededRandom } from "./seededRandom";
import { randomBetween } from "./random";

export function generateGrowth() {

    const random =
        seededRandom(404);

    const points: [number, number][] = [];

    let x = 70;
    let y = 320;

    points.push([x, y]);

    while (x < 650) {

        x += randomBetween(
            random,
            22,
            40,
        );

        y -= randomBetween(
            random,
            12,
            24,
        );

        if (random() > .55) {
            y += randomBetween(
                random,
                12,
                34,
            );
        }

        if (random() > .78) {
            y -= randomBetween(
                random,
                18,
                30,
            );
        }
        y = Math.max(
            45,
            Math.min(
                310,
                y,
            ),
        );
        points.push([x, y]);
    }

    /*
     * последние точки фиксированные
     */
    points.push([690, 70]);
    points.push([720, 30]);
    points.push([740, 42]);
    return points;
}