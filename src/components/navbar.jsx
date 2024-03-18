import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import  { ModeToggle }  from "@/components/ui/toggle-mode copy";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";


import "../app/globals.css";

// import { usePathname } from 'next/navigation'
import Link from 'next/link'

const menuItems = [
['Home', '/'],
['New Request', '/activity/coba'],
['My Request', '/activity'],
['References', '/references'],
['Reports', '/reports'],
['Profile', '/user']
]




export default function Navbar(){
    return (

<nav id="navbar" className="justify-between backdrop-blur-[2px] max-w-7xl rounded-b-3xl bg-red flex  shadow-md shadow-black/10 dark:ring-1 ring-primary/25">
 <div className="flex flex-col items-start lg:flex-row lg:items-center">
<div className="grow-0  lg:justify-normal  h-14 text-primary  px-4 py-2 rounded-b-3xl flex lg:flex-row">
 <h1 className="grow-0 text-2xl px-3 align-middle my-auto"> 
 A - Ω
 </h1>
 {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-2 w-8 h-8">
<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg> */}
{/* <p className="mx-4 my-auto text-xs">Airport Operational Hours Management</p> */}


</div>




<div className="flex  flex-col lg:flex-row px-4">
    
{menuItems.map(([title, url]) => (
// <a href={url} key ={title} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-primary hover:text-primary-foreground">{title}</a>
<Link key={title} className="rounded-lg px-3 py-2 font-medium hover:bg-secondary hover:text-primary" href={url}>
     {title}
  </Link>
))}

</div>
</div>

<div className="flex p-2  justify-between flex-col lg:flex-row items-end  lg:ml-auto">
    
<Button className="lg:hidden" variant="outline" size="icon"> <Menu  className="flex  items-center"/></Button>
{/* <div className="flex text-right my-0 mt-10 items-center"> */}
<ModeToggle className="hidden md:flex items-center"/>   
{/* </div>  */}
{/* <a href="/" className="rounded-lg px-3 py-2 font-medium hover:bg-primary-100 hover:text-primary-900"> Profile</a> */}
<Avatar className="hidden lg:flex mx-4">
<Image src="/garuda.png"  alt="User Profile" width={50} height={50} className="hidden lg:flex ring-2 ring-blue-500"/>
<AvatarFallback>CN</AvatarFallback>
</Avatar>


</div>

{/* <div>

</div> */}

</nav>

)
}