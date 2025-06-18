import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Providers from "./providers";
import "./globals.css";

const interDisplay = localFont({
    src: [
        {
            path: "../public/fonts/InterDisplay-Light.woff2",
            weight: "300",
        },
        {
            path: "../public/fonts/InterDisplay-Regular.woff2",
            weight: "400",
        },
        {
            path: "../public/fonts/InterDisplay-Medium.woff2",
            weight: "500",
        },
        {
            path: "../public/fonts/InterDisplay-SemiBold.woff2",
            weight: "600",
        },
        {
            path: "../public/fonts/InterDisplay-Bold.woff2",
            weight: "700",
        },
    ],
    variable: "--font-inter-display",
});

export const metadata: Metadata = {
    title: "Core 2.0",
    description: "Core 2.0",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Description no longer than 155 characters */}
                <meta
                    name="description"
                    content="Core 2.0 – Dashboard Builder"
                />
                {/* Product Name */}
                <meta
                    name="product-name"
                    content="Core 2.0 – Dashboard Builder"
                />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta
                    name="twitter:title"
                    content="Core 2.0 – Dashboard Builder"
                />
                <meta
                    name="twitter:description"
                    content="Minimal & Ready-to-Build Dashboard UI Design Kit + Code 🔥"
                />
                <meta name="twitter:creator" content="@ui8" />
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta
                    property="og:title"
                    content="Core 2.0 – Dashboard Builder"
                />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/core-20--dashboard-builder"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Minimal & Ready-to-Build Dashboard UI Design Kit + Code 🔥"
                />
                <meta
                    property="og:site_name"
                    content="Core 2.0 – Dashboard Builder"
                />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta
                    property="og:title"
                    content="Core 2.0 – Dashboard Builder"
                />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/core-20--dashboard-builder"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Minimal & Ready-to-Build Dashboard UI Design Kit + Code 🔥"
                />
                {/* Open Graph data for Pinterest */}
                <meta
                    property="og:title"
                    content="Core 2.0 – Dashboard Builder"
                />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/core-20--dashboard-builder"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Minimal & Ready-to-Build Dashboard UI Design Kit + Code 🔥"
                />
            </head>
            <body
                className={`${interDisplay.variable} bg-b-surface1 font-inter text-body-1 text-t-primary antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

export async function generateViewport(): Promise<Viewport> {
    const userAgent = (await headers()).get("user-agent");
    const isiPhone = /iphone/i.test(userAgent ?? "");
    return isiPhone
        ? {
              width: "device-width",
              initialScale: 1,
              maximumScale: 1, // disables auto-zoom on ios safari
          }
        : {};
}
