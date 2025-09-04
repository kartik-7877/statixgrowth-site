import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ✅ Tailwind class helper
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ✅ Framer Motion reusable variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

