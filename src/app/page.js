
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

// const getAllActivities = async () => {
//   const result = await fetch('http://localhost:3001/users');
//   const data = await result.data
//   // console.log(result)
//   console.log(data)
//   return data
//   // return data.json();
// }

export default  async function Home() {
  const response = await fetch('http://localhost:3001/activities',{ next: { revalidate: 20 } })
  const obj = await response.json()
  const {data} = await obj
  console.log(data)

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }

  const finalStatus = (p1,p2) => {

  }

  // const activities = await getAllActivities()
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
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
<CardDescription>Start: {new Date(activity.start).toLocaleString('en-GB',options)} </CardDescription>
<CardDescription>End: {new Date(activity.end).toLocaleString('en-GB',options)} </CardDescription>
</CardContent>
<CardFooter  className="flex justify-between ">
  <Badge variant={"" + activity.status === "APPROVED" ? "approved" : activity.status === "REJECTED" ?  "rejected" : "waiting"}> {activity.status}</Badge>
<Button variant="secondary"> Details </Button>

</CardFooter>
  </Card>
 ))} 

</div>
   </main>

  );
}
