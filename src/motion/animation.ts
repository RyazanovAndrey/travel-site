import type { Variants } from "motion";

export const containerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        }
    }
}

export const fadeIn: Variants = {
    hidden: {
        y: 10,
        opacity: 0,
        filter: 'blur(5px)'
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        }
    }
}

export const fadeInOpacity: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(5px)'
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    }
}