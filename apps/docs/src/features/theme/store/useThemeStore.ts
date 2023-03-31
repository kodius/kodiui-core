import { create } from "zustand";
import { Theme } from "../types";

type ThemeFn = (currentTheme: Theme) => Theme;

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const reverseTheme: ThemeFn = (t) => (t === "light" ? "dark" : "light");

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme) => set(() => ({ theme })),
  toggleTheme: () => set((s) => ({ theme: reverseTheme(s.theme) })),
}));
