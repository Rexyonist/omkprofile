import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMK St. Yakobus Profile",
  description: "Profile Web for OMK Wilayah VIII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
