"use client";

import { ThemeProvider } from "next-themes";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Follows the visitor's system setting until they pick a theme with the toggle
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}
