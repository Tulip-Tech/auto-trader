import AppLayout from "@/components/layout";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import "@/styles/globals.css";

const inter = Poppins({
    subsets: ["latin-ext"],
    weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout className={inter.className}>
            <title>{pageProps?.title ? `B&F - ${pageProps.title}` : 'B&F'}</title>
            <NextNProgress color="#EB6B2A" showOnShallow={true}/>
            <Component {...pageProps} />
        </AppLayout>
    );
}
