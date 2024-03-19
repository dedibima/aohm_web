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
        <div className="border rounded-lg w-full">
        

<Table variant="surface" className="text-xs">
<TableHeader className="text-center">
  <TableRow className="bg-primary/10 ring-blue-400 ">
    <TableHead  className="text-center ">No.</TableHead>
    <TableHead  className="text-center">CATEGORY</TableHead>
    <TableHead className="text-center">START DATE</TableHead>
    <TableHead className="text-center">END DATE</TableHead>
    {/* <TableHead  className="text-center ">AIRCRAFT </TableHead>
    <TableHead className="text-center ">DOW </TableHead> */}
    <TableHead  className="text-center">OH REQ</TableHead>
    <TableHead  className="text-center">STATUS</TableHead> 
    <TableHead   className="text-center">AIRCRAFTS </TableHead>
  </TableRow>
</TableHeader>

<TableBody className="">
{arr.map((activity,index) => (
  <Collapsible asChild key={activity.id} >
    <>
  <TableRow className="text-center [&>*]:p-1">
    <TableCell>{index+1}</TableCell>
    <TableCell >{activity.category}</TableCell>
    <TableCell >{moment((activity.date_start)).format('DD-MM-YYYY')} </TableCell>
    <TableCell >{moment((activity.date_end)).format('DD-MM-YYYY')} </TableCell>
    {/* <TableCell>{activity.days} </TableCell>
    <TableCell className="text-center"></TableCell> */}
    <TableCell >{activity.start}Z - {activity.end}Z</TableCell>
    <TableCell ></TableCell>
    <TableCell > 
    <CollapsibleTrigger asChild><div> {activity.aircrafts.map(aircraft => 
      
      
      aircraft.callsign
      
      ).join(", ")}<br/>
      <span className="text-primary/70"> (Expand) </span>
       </div></CollapsibleTrigger>
    </TableCell>
    
    </TableRow>
    
  <CollapsibleContent asChild >
    <TableRow className="bg-secondary/50 text-center">

    <TableCell className="text-center" colSpan={6}>
      

    
        <Table  className="text-xs text-center p-0">
    <TableHeader className="">
      <TableRow className="">
        <TableHead className="text-center">CALLSIGN</TableHead>
        <TableHead className="text-center">REG</TableHead>
        <TableHead className="text-center">ROUTE</TableHead>
        <TableHead className="text-center">DAYS</TableHead>
        <TableHead className="text-center">STD</TableHead>
        <TableHead className="text-center">STA</TableHead>
      </TableRow>
    </TableHeader>

      {activity.aircrafts.map((aircraft,index) => (
    <TableBody key={index}>
  <TableRow  className="text-center">
    <TableCell>{aircraft.callsign}</TableCell>
    <TableCell>{aircraft.reg}</TableCell>
    <TableCell>{aircraft.origin} - {aircraft.destination} </TableCell>
    <TableCell>{aircraft.days}</TableCell>
    <TableCell>{(aircraft.STD).slice(0,5)}</TableCell>
    <TableCell>{(aircraft.STA).slice(0,5)}</TableCell>
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


