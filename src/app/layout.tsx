import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header"
import Provider from "./components/Provider/Provider"
import ProgressBar from "./components/ProgressBar"

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "./lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My PortFolio",
  description: "Explore my portfolio and envision the possibilities!",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <ProgressBar/>
        <Header/>
        <Toaster/>
        <EdgeStoreProvider>
        {children}
        </EdgeStoreProvider>
        </Provider>
        </body>
    </html>
  );
}
