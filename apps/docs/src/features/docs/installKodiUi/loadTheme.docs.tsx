import { BuildElement } from "@/features/docBuilder";

export const loadTheme: BuildElement = {
  label: "4. Load theme",
  description: {
    description: ["_app.tsx"],
    codeSnippet: [
      `import { theme } from "@/styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={theme}>
      <Component {...pageProps} />
    </div>
  );
}`,
    ],
  },
};
