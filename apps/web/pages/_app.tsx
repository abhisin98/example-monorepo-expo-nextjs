import "@/styles/globals.css";
import { UIProvider, Welcome } from "@avivox/hello-ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider theme="dark">
      <Welcome />
      <Component {...pageProps} />
    </UIProvider>
  );
}
