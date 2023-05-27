import { DocBuilder } from '@/features/docBuilder'
import React from 'react'

const MultipleThemesPage = () => {
  return (
    <DocBuilder
      title="Multiple themes"
      build={() => [
        {
          label: '1. Dark and Light theme',
          description: {
            description: ['contract.css.ts'],
            codeSnippet: [
              `import { vars, tokens, DarkColors } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

const { colors, ...restTokens } = tokens;

export const lightTheme = createTheme(vars, {
  ...restTokens,
  colors,
});

export const darkTheme = createTheme(vars, {
  ...restTokens,
  colors: DarkColors,
});`,
            ],
          },
        },
        {
          label: '2. useThemeStore',
          description: {
            description: ['src/features/theme/store/useThemeStore.ts'],
            codeSnippet: [
              `import { create } from "zustand";
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
                `,
            ],
          },
        },
        {
          label: '3. useTheme hook',
          description: {
            description: ['src/features/theme/hooks/useTheme.ts'],
            codeSnippet: [
              `import { darkTheme, lightTheme } from "@/styles/contract.css";
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

            `,
            ],
          },
        },
        {
          label: '4. Load Themes',
          description: {
            description: ['_app.tsx'],
            codeSnippet: [
              `import type { AppProps } from "next/app";
import { Box } from "@kodiui/ui";
import { useTheme } from "@/features/theme";

import "@kodiui/ui/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <Box p="sm" className={theme} background="white">
      <Component {...pageProps} />
    </Box>
  );
}`,
            ],
          },
        },
      ]}
    />
  )
}

export default MultipleThemesPage
