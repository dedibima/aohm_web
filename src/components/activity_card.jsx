"use server"
import Link from 'next/link'

import moment from 'moment'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge,badgeVariants } from "@/components/ui/badge"


import { actOptions,reqOptions } from "@/config/formatting";

// const getAllActivities = async () => {
//     const response = await fetch('http://localhost:3001/activity/all',{ next: { revalidate: 300 } })
//     const obj = await response.json()
//     return obj
//   }

//   const {data} = await getAllActivities()
//   const newData = Array.from({length: data.length / 9},(_,i) => i ++)
//   console.log(newData)
  
  export default  async function ActivityCard({arr}) {
    // const {data} = await getAllActivities()
    // console.log("this is the data",data)
    
    // console.log("this is arr",arr)
    

    return (
      
        <div className=" backdrop-blur-[2px] grid grid-cols-1 mx-6 gap-6 pt-4 lg:grid-cols-3">
          
      
          
   {arr.map(activity => (
    <Card  className="bg-secondary/10 hover:bg-secondary " key={activity.activityID}>
  <CardHeader>
    <div>
    <CardTitle className="text-secondary-foreground">{activity.category? activity.category : "undefined"}</CardTitle>
    <CardDescription>{activity.reason? activity.reason : "unspecified"}</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
  <div id="cek" className="grid grid-cols-2 gap-[-2] text-secondary-foreground text-sm leading-none">
    <p className="col-start-1 col-end-3">Callsign</p>
    <p className="col-end-7 col-span-2 text-right">{activity.callsign}</p>
    <p className="col-start-1 col-end-3">Route</p>
    <p className="col-end-7 col-span-2 text-right">{activity.origin} - {activity.destination}</p>
    <p className="col-start-1 col-end-3">Time</p>
    <p className="col-end-7 col-span-2 text-right">{`${activity.start}`.slice(0,5)} </p>
    <p className="col-start-1 col-end-3">Date</p>
    <p className="col-end-7 col-span-2 text-right">{moment((activity.period_start)).format('DD-MM-YYYY')}</p>
   </div>

   
  </CardContent>
  <CardFooter  className="flex justify-between my-auto pt-4">
    
  <Link href="/" className={badgeVariants({ variant: "secondary" })}>Details</Link>
  <Badge variant={"" + activity.status === "APPROVED" ? "approved" : activity.status === "REJECTED" ?  "rejected" : "waiting"}> {activity.status}</Badge>
 
  </CardFooter>
</Card> 
  
    
    ))} 
   
  </div>
    )
}
