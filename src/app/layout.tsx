import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inria_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inria-serif',
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BSA Stablecoin and Payments",
  description: "BSA Blockchain Hackathon ",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="myCustomTheme">
      <body
        className={`${inter.variable} ${inriaSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

