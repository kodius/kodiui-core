import { darkTheme, lightTheme } from "@/styles/contract.css";
import type { AppProps } from "next/app";
import "@kodiui/ui/style.css";
import { useState } from "react";
import { Sidebar } from "@kodiui/ui";
import { Navigator } from "@/features/navigator/Navigator";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const isLight = themeMode === "light";
  const theme = isLight ? lightTheme : darkTheme;

  return (
    <div className={theme}>
      <Sidebar>
        <Navigator />
        <Component {...pageProps} />
      </Sidebar>
    </div>
  );
}
