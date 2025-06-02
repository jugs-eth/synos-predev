import "@/styles/globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={`min-h-screen flex flex-col ${inter.className}`}>
          <Header />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <footer className="py-6 border-t">
            <div className="container text-center text-sm mx-auto text-muted-foreground">
              &copy; {new Date().getFullYear()} Auth Base. All rights reserved.
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
