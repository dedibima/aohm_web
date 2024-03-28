"use client"
import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import  { ModeToggle }  from "@/components/ui/toggle-mode copy";
import Image from "next/image";

import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"

import  { ModeToggle }  from "@/components/ui/toggle-mode copy";

import "../app/globals.css";




// import { usePathname } from 'next/navigation'
import Link from 'next/link'



import {
  Home,
  Book,
  Settings,
  Settings2,
  FolderClock,
  Clock,
  FileClock,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react"







export default function Side(){
    return (
<div className="grid h-full w-full pl-[56px] ">
<aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r ">
        <div className="border-b p-2 ">
          <Button variant="outline" size="icon" aria-label="Home">
          <h3 className=" font-extrabold text-xl">Ω</h3>
          </Button>
        </div>
        <nav className="grid gap-2 p-2">
          <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="Dashboard"
              >

                <Home className="size-5" />
              </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Dashboard
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="New Activity"
              >
                <FileClock className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              New Activity
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="Activity Management"
              >
                <FolderClock className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Activity Management
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="Profile"
              >
                <SquareUser className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Profile
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="grid gap-2 p-2 mt-auto">
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="Reference"
              >
                <Book className="size-5"/>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              References
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
          
          
          <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                
                <ModeToggle>
                <Button
                variant="ghost"
                size="icon"
                className="rounded-lg "
                aria-label="Toggle"
              >
                </Button>
                </ModeToggle>
              
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Dark/Light Mode
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>

          

        </nav>
</aside>

</div>


)
}