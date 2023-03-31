import { lightTheme } from "@/styles/contract.css";
import type { AppProps } from "next/app";
import '../styles/test.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lightTheme}>
      <Component {...pageProps} />
    </div>
  );
}
