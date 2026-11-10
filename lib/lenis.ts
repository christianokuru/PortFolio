import type Lenis from "lenis";

// Shared handle so other components (e.g. the phone menu) can pause scrolling
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const getLenis = () => instance;
