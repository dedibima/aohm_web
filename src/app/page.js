
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

import { actOptions,reqOptions } from "@/config/formatting";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import { activeActivities, allActivities } from "@/lib/data";

import ActivityCard from "@/components/activity_card";

import ActivityTable from "@/components/activity_table";




const lists = allActivities.data
// console.log(lists)
// const chunk2 = x.slice(1,2)

// console.log(chunk2,"chunk2")


export default  async function Activity({searchParams}) {
 

 const page = searchParams['page'] ?? '1'
 const view = searchParams['view'] ?? 'table'
 const per_page = searchParams['per_page'] ?? '12'
 

 const start = (Number(page)-1) * Number(per_page)
 const end = start + Number(per_page)

 const entries = lists.slice(start,end)
 const last_page = Math.ceil(Number(lists.length) / Number(per_page))

  return (
    <main>

            



            
            <h2 className="text-secondary-foreground p-4 py-4">Active Requests</h2>
            <Pagination className="mt-2 mb-0 " >
  <PaginationContent className="container flex flex-row mb-0 mt-2 justify-end">
  <PaginationItem >
      <PaginationPrevious href={`?view=${view}&${page==1 ? "" : `?page=${Number(page)-1}`}`}/>
    </PaginationItem>
    <PaginationItem >
      <PaginationLink href="?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis href="" />
    </PaginationItem>
    <PaginationItem >
      <PaginationNext href={`${page==last_page ? "" : `?page=${Number(page)+1}`}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>



{view == 'card'? <ActivityCard className="mx-2" arr={entries}/> : <ActivityTable arr={entries}/>}


{/* { if(view == 'card'){
return (<ActivityCard className="mx-2" arr={entries}/> )

}} */}




{/* <ActivityTable arr={entries}/> */}

   </main>

  );
}
