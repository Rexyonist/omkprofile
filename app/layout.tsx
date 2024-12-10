import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logo } from "@/public/images";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St.Yakobus Profile",
  description:
    "A Catholic youth organization dedicated to faith, service, and community.",
  icons: "/images/yakoubsprof.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center text-xl font-bold">
                <Image className="w-8 h-8 mr-2 rounded-full" src={logo} alt="st yakobus pict" />
                OMK Santo Yakobus
              </Link>
              <div className="space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/about">About</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/events">Events</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/content">Content</Link>
                </Button>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <p>
                &copy;{new Date().getFullYear()} OMK St Yakobus. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
