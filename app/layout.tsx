import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-full min-h-screen w-full my_p text-my_color_text selection:bg-my_color_1 selection:text-white bg-my_color_background ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
