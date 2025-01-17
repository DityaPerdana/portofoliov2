import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import Nav from "@/components/ui/navbar/Nav";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Raditya Alfarisi Portofolio",
  description: "Explore my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body className={`antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system">
          <Suspense>
            <Nav />
            <ScrollProgress />
            {children}
            <Footer />
          </Suspense>
      </ThemeProvider>
        </body>
    </html>
  );
}
