import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type React from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexolinx | Your Tech Solution",
  description:
    "Leading IT company in Nepal specializing in web development, graphics design, and mobile app development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <AnimatePresence mode="popLayout">
            <main>{children}</main>
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}