import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      </Head>
      <body className="antialiased font-albert-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
