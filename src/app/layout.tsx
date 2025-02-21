import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"]
})

export const metadata: Metadata = {
  title: "Pedro Goettert",
  description: "Portfólio de Pedro Goettert, desenvolvedor web especializado em criar sites. Veja projetos inovadores e soluções personalizadas em design e desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-[#f4f4f9]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
