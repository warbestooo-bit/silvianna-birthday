import type { Metadata } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: '--font-nunito' });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-caveat' });

export const metadata: Metadata = {
    title: "Happy Birthday Silvianna ❤️",
    description: "A special birthday greeting just for you!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={`${nunito.variable} ${caveat.variable} font-sans antialiased`}>{children}</body>
        </html>
    );
}
