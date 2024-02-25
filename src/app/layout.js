

import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeProvider } from "@/components/theme-provider"
import  { ModeToggle }  from "@/components/ui/toggle-mode";
import { Toaster } from "@/components/ui/toaster"


import "./globals.css";

// import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airport Operational Hour Management - A Ω",
  description: "",
};

// const pathname = usePathname();

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" >
      <body className={`${inter.className}`}   >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            
      >
        <Navbar/>
        {children}

      </ThemeProvider>
       <Toaster />
        </body>
    </html>
  );
}
