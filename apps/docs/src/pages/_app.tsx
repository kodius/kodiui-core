import type { AppProps } from "next/app";
import { Box, Center, Sidebar } from "@kodiui/ui";
import { Navigator } from "@/features/navigator";
import { useTheme } from "@/features/theme";

import { Inter } from "next/font/google";

import "@kodiui/ui/style.css";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <div className={inter.className}>
      <Box p="sm" className={theme} background="white">
        {/* TODO maxWidth={mobile size or so on}  */}
        <Center __maxWidth={1100}>
          <Sidebar
            gap={0}
            flexDirection={{ mobileExtraSmall: "column", tablet: "row" }}
          >
            <Navigator />
            <Component {...pageProps} />
          </Sidebar>
        </Center>
      </Box>
    </div>
  );
}
