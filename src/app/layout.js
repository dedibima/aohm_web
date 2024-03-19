

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"

import { Toaster } from "@/components/ui/toaster"


import "./globals.css";

// import { usePathname } from 'next/navigation'

import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airport Operational Hour Management - A Ω",
  description: "",
};

// const pathname = usePathname();

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}   >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
        <Navbar/>
        {children}

      </ThemeProvider>
       <Toaster />
        </body>
    </html>
  );
}
