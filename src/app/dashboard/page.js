"use client"

import moment from "moment";

import { 
    Card,
    CardHeader,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";

import { TowerControlIcon,Plane } from "lucide-react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


  import usePrivateAxios from "@/lib/hooks/privateAxios";
  import { useEffect,useState } from "react";


export default function page() {

    const privateAxios = usePrivateAxios()
    const [lists,setLists] = useState([])
    
    
    
    useEffect(() => {
    
      const getAllActivities = () => {
        return privateAxios.get('/activity/all2').then(response => setLists(response.data.data))
      }
    
        
    getAllActivities()
    },[])

    console.log(lists)
  return (

    <div className="flex flex-col min-h-screen w-full">
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b  bg-background px-4">
      <h3 className="text-xl font-bold">Dashboard</h3>
    </header>

<div className="p-6">

    <h3 className="font-semibold text-md p-4 text-muted-foreground"> Today Active Requests </h3>
    <div className="grid grid-cols-2  gap-8 w-full">
        <Card className=" h-full">
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className=" w-1 text-left">No.</TableHead>
      <TableHead className="text-left w-1/5 w-">Category</TableHead>
      <TableHead className="text-left">Date</TableHead>
      <TableHead className="text-left">OH Req</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {lists.map(activity => (
<TableRow key={activity.id}>
      <TableCell className="font-medium text-left">{activity.id}</TableCell>
      <TableCell className="font-medium text-left">{`${activity.category}`.toLocaleUpperCase()}</TableCell>
      <TableCell className="text-left"> <div>{moment((activity.date_start)).format('DD-MM-YYYY')}</div>
      <div>{moment((activity.date_end)).format('DD-MM-YYYY')} </div></TableCell>
                
      <TableCell>
        <div>
            {`${activity.time_start}`.slice(0,5)}
        </div>  
        <div>
            {`${activity.time_end}`.slice(0,5)}
        </div></TableCell>
      <TableCell className="text-right grid gap-1">
        <Badge variant={activity.ap_approval ===1 ? "approved" : activity.ap_approval === null?  "secondary" : "rejected"}>
    <Plane size={14} className="my-auto"/>
    <div className="ml-auto">{activity.ap_approval ===1 ? "Approved" : activity.ap_approval === null?  "Waiting" : "Rejected"}</div>
</Badge>
{/* <br/> */}
<Badge variant={activity.airnav_approval ===1 ? "approved" : activity.airnav_approval === null?  "secondary" : "rejected"}>
    <TowerControlIcon size={14} className="my-auto"/>
    <div className="ml-auto">{activity.airnav_approval ===1 ? "Approved" : activity.airnav_approval === null?  "Waiting" : "Rejected"}</div>
</Badge>



      </TableCell>
    </TableRow>
  ))}
  </TableBody>
</Table>

        </Card>
        <h3 className="font-semibold text-md p-4 text-muted-foreground"> Upcoming Request </h3>

        <Card className=" h-full">

        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

        </Card>

        </div>
        </div>
</div>

  )
}

