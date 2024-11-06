export const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? -65 :  65,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: .35 },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? -65 : 65,
        opacity: 0,
        transition: { duration: .35 },
    }),
};