import "@/styles/globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className={`min-h-screen flex flex-col ${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
