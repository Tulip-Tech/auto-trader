import type { AppProps } from "next/app";
import Head from 'next/head';
import { Poppins } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import AppLayout from "@/components/layout";
import "@/styles/globals.css";
import { capitalizeFirstLetter } from '@/services/capitalizeFirstLetter';

const inter = Poppins({
    subsets: ["latin-ext"],
    weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout className={inter.className}>
            <Head>
                <title>{pageProps?.title ? `B&F Cars - ${capitalizeFirstLetter(pageProps.title)}` : 'B&F Cars'}</title>
            </Head>
            <NextNProgress color="#EB6B2A" showOnShallow={true}/>
            <Component {...pageProps} />
        </AppLayout>
    );
}
