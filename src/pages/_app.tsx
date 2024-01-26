import AppLayout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const inter = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout className={inter.className}>
      <Component {...pageProps} />
    </AppLayout>
  );
}
