import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="icon"
          href="/assets/favicon/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/assets/favicon/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/assets/favicon/android-chrome-180x180.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/assets/favicon/android-chrome-300x300.png"
          type="image/png"
          sizes="300x300"
        />
        <link
          rel="icon"
          href="/assets/favicon/android-chrome-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/favicon/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
