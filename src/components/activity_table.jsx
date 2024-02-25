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


import moment from "moment"

export default async function ActivityTable({arr}) {

    return (
        <div>
        

<Table className="text-center text-xs mb-12">
<TableHeader className="border-2 bg-secondary border-black/5">
  <TableRow>
    <TableHead rowSpan={2} className="text-center ">CALLSIGN</TableHead>
    <TableHead rowSpan={2}className="text-center ">ROUTE</TableHead>
    <TableHead colSpan={2} className="text-center">PERIOD</TableHead>
    <TableHead rowSpan={2} className="text-center">OH REQ</TableHead>
    <TableHead rowSpan={2} className="text-center">STATUS</TableHead>
  </TableRow>
  <TableRow>
    <TableHead className="text-center">START</TableHead>
    <TableHead className="text-center">END</TableHead>
  </TableRow>
</TableHeader>
<TableBody className="border-2 border-black/5">
{arr.map(activity => (
  <TableRow key={activity.id}>
    <TableCell className="font-medium">{activity.callsign}</TableCell>
    <TableCell>{activity.origin} - {activity.destination} </TableCell>
    <TableCell>{moment((activity.period_start)).format('DD-MM-YYYY')} </TableCell>
    <TableCell>{moment((activity.end)).format('DD-MM-YYYY')} </TableCell>
    <TableCell>{activity.start}Z - {activity.end}Z</TableCell>
    <TableCell className="text-center">{activity.status}</TableCell>
  </TableRow>
)     )}
</TableBody>
</Table>

            


        
            
            
            
            
       

       
            
          

</div>
    )}


