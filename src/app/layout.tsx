import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Head from "./components/head";
import { ThemeContext } from "./context/ThemeContext";
export const metadata: Metadata = {
  title: "MS - Blog",
  description:
    "I'm just a human writing a blog, and living with experience and peace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeContext>
          <Head />
          <div className="md:container mx-auto  mt-8">{children}</div>
          <div className="p-5 max-w-lg mx-auto sapce-y-5 left-0 right-0 bottom-20 lg:border-none border-t">
            <p className="text-center text-sm text-gray-500">
              this blog was written by owned this blog self for personal
              purpose.
            </p>
            <p className="text-center text-sm font-bold dark:text-white text-gray-900">
              mblogs is made by ❤️ Mohammad S
            </p>
          </div>
        </ThemeContext>
      </body>
    </html>
  );
}
