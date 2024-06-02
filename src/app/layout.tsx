import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Profile Viewer",
  description: "Know all about yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-screen h-screen">
            <NavBar />
            <Providers>
              <main className="bg-[#E7E7E2] dark:bg-[#0d3c3b48]  w-screen h-screen">
                {children}
              </main>
            </Providers>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
