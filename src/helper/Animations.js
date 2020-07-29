const titleTransition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }
const svgTransition = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9] }
const transition = { ease: [0.6, 0.01, -0.05, 0.9] }

export const firstNameVariant = {
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.18,
            staggerDirection: 1
        }
    }
}

export const secondNameVariant = {
    animate: {
        transition: {
            delayChildren: 1.7,
            staggerChildren: 0.16,
            staggerDirection: -1
        }
    }
}

export const firstLetterVariant = {
    initial: { opacity: 0, y: "120%" },
    animate: { opacity: 1, y: 0, transition: { ...titleTransition } }
}
export const secondLetterVariant = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0, transition: { ...titleTransition } }
}

export const svgVariant = {
    initial: { opacity: 0, filter: "blur(12px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { ...svgTransition } }
}

export const albumVariants = {
    initial: { 
        height: "500px", 
        width: "500px", 
        y: "-33%", 
        x: "158.5%" 
    },
    animate: { 
        height: "820px", 
        width: "100%", 
        y: 0, 
        x: 0, 
        transition: { 
            delay: 0.1, 
            duration: 1.2, 
            ease: [0.6, 0.05, -0.01, 0.9] }  
        }
}

export const titleVariant = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.12,
            staggerDirection: 1
        }
    }
}

export const titleLetter = {
    initial: {
        y: 400
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5, 
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}
export const subTitleVariant = {
    animate: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.12,
            staggerDirection: -1
        }
    }
}

export const subTitleLetter = {
    initial: {
        y: 400
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5, 
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

export const introVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

export const leftContentVariant = {
    hidden: {
        opacity: 0,
        y: 72
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}
export const rightContentVariant = {
    hidden: {
        opacity: 0,
        y: 72
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1, 
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}
export const mainContentVariant = {
    hidden: {
        opacity: 0,
        y: 72
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.8, 
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

export const slide1Variant = {
    animate: {
    x: ["-30%", "120%"], 
    opacity: [0.6, 0.8, 0.9, 0.8, 0.6, 0.9], 
        transition: { 
            yoyo: Infinity,
            duration: 17
        } 
    }
}
export const slide2Variant = {
    animate: {
    x: ["30%", "-120%"], 
    opacity: [0.6, 0.8, 0.9, 0.8, 0.6, 0.9], 
        transition: { 
            yoyo: Infinity,
            duration: 17
        } 
    }
}

export const musicVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

export const headerVariants = {
    initial: {
        opacity: 0,
        filter: "blur(12px)"
    },
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.6, 0.01, -0.05, 0.9]
        }
    }
}

export const dashedWrapper = {
    initial: {
        opacity: 0,
        filter: "blur(12px)"
    },
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: 1,
            duration: 3,
            ease: [0.6, 0.01, -0.05, 0.9]
        }
    }
}

export const footerVariant = {
    initial: {
        opacity: 0,
        filter: "blur(12px)"
    },
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: 1,
            duration: 3,
            ease: [0.6, 0.01, -0.05, 0.9]
        }
    }
}

export const widthVariant = {
    initial: {
        width: 0,
        opacity: 0,
    },
    animate: {
        width: "100%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1.45,
            ...transition,
        }
    }
}

export const discVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            opacity: { duration: 1.4, delay: 2 },
            ease: "easeInOut",
        } 
    }
}

export const opacityVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.5,
            ...transition
        }
    }
}