import {
    useEffect,
    useRef,
    useState,
    type RefObject,
} from "react";

import {
    animate,
    MotionValue,
    useMotionValue,
} from "framer-motion";

export interface AccountSliderController {
    refs: {
        containerRef: RefObject<HTMLDivElement | null>;
        sliderRef: RefObject<HTMLDivElement | null>;
    };
    motion: {
        x: MotionValue<number>;
    };
    drag: {
        constraints: {
            left: number;
            right: number;
        };
    };
    activeIndex: number;
    cardsCount: number;
    next(): void;
    prev(): void;
    scrollTo(index: number): void;
    onDragEnd(): void;
}

export function useAccountSlider(
    cardsCount: number,
): AccountSliderController {

    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);

    const [dragWidth, setDragWidth] = useState(0);

    const [cardWidth, setCardWidth] = useState(0);

    const [gap, setGap] = useState(24);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {

        if (
            !containerRef.current ||
            !sliderRef.current
        ) {
            return;
        }

        const calculate = () => {

            if (
                !containerRef.current ||
                !sliderRef.current
            ) {
                return;
            }

            const firstCard =
                sliderRef.current.firstElementChild as HTMLElement | null;

            if (firstCard) {

                const style =
                    getComputedStyle(
                        sliderRef.current,
                    );

                setGap(
                    parseFloat(style.columnGap || style.gap || "24"),
                );

                setCardWidth(
                    firstCard.offsetWidth,
                );
            }

            setDragWidth(
                Math.max(
                    sliderRef.current.scrollWidth -
                    containerRef.current.clientWidth,
                    0,
                ),
            );
        };

        calculate();

        const observer =
            new ResizeObserver(calculate);

        observer.observe(containerRef.current);

        return () => observer.disconnect();

    }, []);

    const scrollTo = (
        index: number,
    ) => {

        const safeIndex = Math.max(
            0,
            Math.min(
                index,
                cardsCount - 1,
            ),
        );

        setActiveIndex(
            safeIndex,
        );

        animate(
            x,
            -(cardWidth + gap) * safeIndex,
            {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        );
    };

    const next = () => {
        scrollTo(
            activeIndex + 1,
        );
    };

    const prev = () => {
        scrollTo(
            activeIndex - 1,
        );
    };

    const onDragEnd = () => {

        const index = Math.round(
            Math.abs(
                x.get(),
            ) / (cardWidth + gap),
        );

        scrollTo(index);
    };

    return {
        refs: {
            containerRef,
            sliderRef,
        },
        motion: {
            x,
        },
        drag: {
            constraints: {
                left: -dragWidth,
                right: 0,
            },
        },
        activeIndex,
        cardsCount,
        next,
        prev,
        scrollTo,
        onDragEnd,
    };
}