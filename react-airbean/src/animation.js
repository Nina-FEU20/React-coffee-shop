export const navSliderAnim = {
    hidden: { opacity: 1, x: -400}, 
    show: {
        opacity: 1,
        x: 0, 
        transition: {
            duration: 0.3, 
            ease: "easeOut"
        }
    },
    out: { opacity: 0, transition: {
        duration: 2, ease: "easeOut" } }
}

export const headerLeavesAnim = { 
    hidden: { rotate: -90, y: "350px", x: "-100px", scale: 1.8}, 
    show: { 
    y: 0, 
    x: 0,
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut"} }
}

export const footerLeavesAnim = {
    hidden: { rotate: -90, y: "-400px", x: "120px", scale: 2, }, 
    show: { 
        y: 0, 
        x: 0,
        rotate: 0, 
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut"} }
}

export const menuTextAnim = {
    hidden: { opacity: 0, y: 100, scale: 0.7}, 
    show: {
        y: 0,
        scale: 1,
        opacity: 1, 
        transition: {
            duration: 0.3, 
            ease: "easeOut"
        }
    }, 
    exit: { opacity: 1}
}

export const aboutTextAnim = {
    hidden: { opacity: 0, y: 200, scale: 0.7}, 
    show: {
        y: 0,
        scale: 1,
        opacity: 1, 
        transition: {
            duration: 0.5, 
            ease: "easeOut"
        }
    },
}

export const cartSliderAnim = {
    hidden: { x: 400}, 
    show: {
        x: 0, 
        transition: {
            duration: 0.5, 
            ease: "easeOut"
        }
    },
    out: {
        x: 400,
        transition: {
            duration: 0.5, 
            ease: "easeOut"
        }
    }
}

export const flyingDroneAnim = {
    y: {
        duration: 0.8, 
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
    }, 
    x: {
        duration: 1.6, 
        repeat: Infinity,
        repeatType: 'reverse', 
        ease: "easeInOut"
    },
    scale: {
        duration: 5, 
        ease: "easeInOut"
    }
}

export const pageFadeAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5, ease: "easeOut"}}
}

export const navMenuAnim = { 
    hidden: { y: -100, scale: 1.4, opacity: 0 }, 
    show: { y: 0,
        opacity: 1, 
        scale: 1, 
        transition: { delay: 0.1,
        duration: 0.5, ease: "easeOut"
    }}
}

export const navAboutAnim = {
    hidden: { y: -170, x: -40,  scale: 1.4 }, 
    show: { y: 0,
        x: 0,
        scale: 1, 
        transition: { delay: 0.1, 
        duration: 0.5, ease: "easeOut"
    }}
}