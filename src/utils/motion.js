export const textVariant = () => ({
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0.3,
    },
  },
});

export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
export const slideIn = (direction = "left", type = "spring", delay = 0, duration = 0.75) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});