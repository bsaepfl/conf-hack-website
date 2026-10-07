import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hackathon - BSA EPFL",
  description:
    "The Hackathon by the Blockchain Student Association at EPFL. 10-11 October 2026 at the BC Building, EPFL. Free food and $5,700 in prizes.",
  icons: { icon: "/images/logo-icon-white.png" },
  openGraph: {
    title: "The Hackathon - BSA EPFL",
    description: "10-11 October 2026 · BC Building, EPFL · $5,700 in prizes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
