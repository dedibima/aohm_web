"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"


import moment from "moment"

export default function ActivityTable({arr}) {
const arr2=[]
    return (
        <div className="w-full">
        

<Table variant="surface" className="text-xs mb-12 py-0 rounded-lg border-2">
<TableHeader className="text-center">
  <TableRow>
    {/* <TableHead  className="text-center ">No.</TableHead> */}
    <TableHead  className="text-center">CATEGORY</TableHead>
    <TableHead className="text-center">START DATE</TableHead>
    <TableHead className="text-center">END DATE</TableHead>
    {/* <TableHead  className="text-center ">AIRCRAFT </TableHead>
    <TableHead className="text-center ">DOW </TableHead> */}
    <TableHead  className="text-center">OH REQ</TableHead>
    <TableHead  className="text-center">STATUS</TableHead> 
    <TableHead   className="text-center">Aircraft </TableHead>
  </TableRow>
</TableHeader>

<TableBody className="">
{arr.map(activity => (
  <Collapsible asChild key={activity.id} >
    <>
  <TableRow className="text-center">
    {/* <TableCell>{activity.submitted_by}</TableCell> */}
    <TableCell>{activity.category}</TableCell>
    <TableCell>{moment((activity.date_start)).format('DD-MM-YYYY')} </TableCell>
    <TableCell>{moment((activity.date_end)).format('DD-MM-YYYY')} </TableCell>
    {/* <TableCell>{activity.days} </TableCell>
    <TableCell className="text-center"></TableCell> */}
    <TableCell>{activity.start}Z - {activity.end}Z</TableCell>
    <TableCell className="text-center"></TableCell>
    <TableCell > 
    <CollapsibleTrigger asChild><div> {">"} </div></CollapsibleTrigger>
    </TableCell>
    
    </TableRow>
    
  <CollapsibleContent asChild >
    <TableRow className="bg-secondary/50 text-center">

    <TableCell className="text-center" colSpan={6}>
      

    
        <Table  className="py-20 text-xs text-center ">
    <TableHeader className=" ">
      <TableRow >
        <TableHead className="text-center">CALLSIGN</TableHead>
        <TableHead className="text-center">REG</TableHead>
        <TableHead className="text-center">ROUTE</TableHead>
        <TableHead className="text-center">DAYS</TableHead>
        <TableHead className="text-center">STD</TableHead>
        <TableHead className="text-center">STA</TableHead>
      </TableRow>
    </TableHeader>

      {activity.aircrafts.map(aircraft => (
    <TableBody key={aircraft.id}>
  <TableRow key={aircraft.id} className="text-center">
    <TableCell>{aircraft.callsign}</TableCell>
  
    <TableCell>{aircraft.reg}</TableCell>
    <TableCell>{aircraft.origin} - {aircraft.destination} </TableCell>
    <TableCell>{aircraft.days}</TableCell>
    <TableCell>{aircraft.STD}</TableCell>
    <TableCell>{aircraft.STA}</TableCell>
  </TableRow>
</TableBody>
)
)}
</Table>



  </TableCell>
    </TableRow>

  </CollapsibleContent  >

  </>
    </Collapsible>






   
    


)     )}
</TableBody>
</Table>
</div>
    )}


