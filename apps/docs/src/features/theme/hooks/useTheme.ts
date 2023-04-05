import { darkTheme, lightTheme } from "@/styles/contract.css";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const activeTheme = theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  return activeTheme;
};
