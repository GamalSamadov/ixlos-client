export const VARIANTS = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.1,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}
