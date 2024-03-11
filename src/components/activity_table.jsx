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
import { parseBitmask } from "@/lib/data"


import moment from "moment"

export default async function ActivityTable({arr}) {

    return (
        <div>
        

<Table className="text-center text-xs mb-12 py-0 rounded-md">
<TableHeader className="">
  <TableRow>
    {/* <TableHead rowSpan={1} colSpan={1} className="text-center ">REQ NO.</TableHead> */}
    <TableHead rowSpan={1} className="text-center ">INITIATOR</TableHead>
    <TableHead rowSpan={1} className="text-center">CATEGORY</TableHead>
    <TableHead className="text-center">START DATE</TableHead>
    <TableHead className="text-center">END DATE</TableHead>
    {/* <TableHead colSpan={2} className="text-center">PERIOD</TableHead> */}
    <TableHead rowSpan={1} className="text-center ">AIRCRAFT </TableHead>
    <TableHead rowSpan={1} className="text-center ">DOW </TableHead>
    <TableHead rowSpan={1} className="text-center">OH REQ</TableHead>
    <TableHead rowSpan={1} className="text-center">STATUS</TableHead>
  </TableRow>
</TableHeader>
<TableBody className="">
{arr.map(activity => (
  <TableRow key={activity.id}>
    {/* <TableCell className="font-medium">{activity.id}</TableCell> */}
    <TableCell>{activity.submitted_by}</TableCell>
    <TableCell>{activity.category}</TableCell>
    <TableCell>{moment((activity.date_start)).format('DD-MM-YYYY')} </TableCell>
    <TableCell>{moment((activity.date_end)).format('DD-MM-YYYY')} </TableCell>
    <TableCell>{activity.days} </TableCell>
    <TableCell className="text-center"></TableCell>
    <TableCell>{activity.start}Z - {activity.end}Z</TableCell>
    <TableCell className="text-center"></TableCell>
  </TableRow>
)     )}
</TableBody>
</Table>

            


        
            
            
            
            
       

       
            
          

</div>
    )}


