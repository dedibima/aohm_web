
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

const getAllActivities = async () => {
  const response = await fetch('http://localhost:3001/activities',{ next: { revalidate: 20 } })
  const obj = await response.json()
  return obj
}

export default  async function Home() {
  const {data} = await getAllActivities()

  console.log(data)



  const finalStatus = (p1,p2) => {

  }

  // const activities = await getAllActivities()
  return (
    <main>
      <div className="grid grid-cols-3 gap-6">
        {/* <div>
         <p>list  {data[0].category}</p> 
        </div> */}
{data.map(activity => (
  <Card key={activity.activityID}>
    
<CardHeader>
  <div>
  <CardTitle>{activity.category}</CardTitle>
  <CardDescription>{activity.reason}</CardDescription>
  </div>
</CardHeader>
<CardContent>
{/* <CardDescription>Callsign : {activity.callsign}</CardDescription> */}
{/* <CardDescription>Route : {activity.origin} - {activity.destination} </CardDescription> */}
<div className="grid grid-cols-3 gap-0">
  <CardDescription className="col-start-1 col-end-3">Callsign</CardDescription>
  <CardDescription className="col-end-7 col-span-2 text-right">{activity.callsign}</CardDescription>
  <CardDescription className="col-start-1 col-end-3">Route</CardDescription>
  <CardDescription className="col-end-7 col-span-2 text-right">{activity.origin} - {activity.destination}</CardDescription>
  <CardDescription className="col-start-1 col-end-3">Start</CardDescription>
  <CardDescription className="col-end-7 col-span-2 text-right">{new Date(activity.start).toLocaleString('en-GB',actOptions)} </CardDescription>
  <CardDescription className="col-start-1 col-end-3">End</CardDescription>
  <CardDescription className="col-end-7 col-span-2 text-right">{new Date(activity.end).toLocaleString('en-GB',actOptions)} </CardDescription>
  
</div>

</CardContent>

<CardFooter  className="flex justify-between my-auto pt-6">
  
<Link href="/" className={badgeVariants({ variant: "secondary" })}>Details</Link>
<Badge variant={"" + activity.status === "APPROVED" ? "approved" : activity.status === "REJECTED" ?  "rejected" : "waiting"}> {activity.status}</Badge>
{/* <Button variant="secondary"> Details </Button> */}

</CardFooter>
{/* <Separator className="my-4" /> */}


  </Card>
 ))} 

</div>
   </main>

  );
}
