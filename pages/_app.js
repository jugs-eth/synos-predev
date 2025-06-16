import "@/styles/globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"



export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider>
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className={`min-h-screen flex flex-col`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
