import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "PPVA Command Center | JH",
  description: "Operational command center for JH's Private Placement Variable Annuity business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
