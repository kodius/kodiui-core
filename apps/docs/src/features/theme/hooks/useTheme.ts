import { darkTheme, lightTheme } from "@/styles/contract.css";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const activeTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  return activeTheme;
};
