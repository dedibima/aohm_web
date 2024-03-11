
import Image from "next/image";
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge,badgeVariants } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import { actOptions,reqOptions } from "@/config/formatting";

import ActivityCard from "@/components/activity_card";

import { allActivities } from "@/lib/data";


const getAllActivities = async () => {
  const response = await fetch('http://localhost:3001/activity/all')
  const obj = await response.json()
  return obj
}

const entries = allActivities.data






export default  async function Activity({searchParams}) {
  
  // const activities = await getAllActivities()
  return (
    <main>
    
    <ActivityCard arr={entries}/>
<div class="my-6 bottom-4 left-30">
    <Button className="rounded-full">
<Link href="/activity/create"> Create New</Link>

    </Button>
</div>
   </main>

  );
}
