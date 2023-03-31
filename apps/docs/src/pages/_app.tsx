import type { AppProps } from "next/app";
import { Box, Center, Sidebar } from "@kodiui/ui";
import { Navigator } from "@/features/navigator";
import { useTheme } from "@/features/theme";

import "@kodiui/ui/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <Box className={theme} height="screen" background="gray2">
      {/* TODO maxWidth={mobile size or so on}  */}
      <Center __maxWidth={1308}>
        <Sidebar gap="0">
          <Navigator />
          <Component {...pageProps} />
        </Sidebar>
      </Center>
    </Box>
  );
}
