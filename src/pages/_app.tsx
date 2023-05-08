import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // theme={{
        //   /** Put your mantine theme override here */
        //   colorScheme: "light",
        // }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ClerkProvider>
  );
}
