import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  weight: "400",
  variable: "--font-jersey",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Sathwik - Portfolio",
  description: "Web Developer & Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jersey10.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
