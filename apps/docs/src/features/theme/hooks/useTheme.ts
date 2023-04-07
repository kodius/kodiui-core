import { darkTheme, lightTheme } from "@/styles/contract.css";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const activeTheme = theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = mq.matches;
    setTheme(isDark ? "dark" : "light");

    mq.addEventListener("change", function (evt) {
      const isDark = evt.matches;
      console.log(isDark);
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
      setTheme(isDark ? "dark" : "light");
    });
  }, []);

  console.log(activeTheme);

  return activeTheme;
};
