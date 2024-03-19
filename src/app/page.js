"use client"
import Image from "next/image";
// import Link from 'next/link'
import usePrivateAxios from "@/lib/hooks/privateAxios";
import { useEffect,useState } from "react";


// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Badge,badgeVariants } from "@/components/ui/badge"

// import { actOptions,reqOptions } from "@/config/formatting";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"




// import ActivityCard from "@/components/activity_card";

import ActivityTable from "@/components/activity_table";





export default  function Activity({searchParams}) {
const privateAxios = usePrivateAxios()
const [lists,setLists] = useState([])



useEffect(() => {

  const getAllActivities = () => {
    return privateAxios.get('/activity/all2').then(response => setLists(response.data.data))
  }

    
getAllActivities()
},[])


  console.log(lists)






 

 const page = searchParams['page'] ?? '1'
 const view = searchParams['view'] ?? 'table'
 const per_page = searchParams['per_page'] ?? '20'
 

 const start = (Number(page)-1) * Number(per_page)
 const end = start + Number(per_page)

 const entries = lists && lists.slice(start,end)
 const last_page = Math.ceil(Number(lists.length) / Number(per_page))

  return (
    <main>

            



            
            <h2 className="text-secondary-foreground py-2">Active Requests</h2>
            <Pagination className="my-2 " >
  <PaginationContent className="container flex flex-row mb-0 mt-2 justify-end px-0">
  <PaginationItem >
      <PaginationPrevious className="text-xs" href={`${page==1 ? "" : `?page=${Number(page)-1}`}`}/>
    </PaginationItem>
    <PaginationItem >
      <p className="text-xs my-auto"> Page {page} of {last_page}</p>
    </PaginationItem>
    <PaginationItem >
      <PaginationNext className="text-xs" href={`${page==last_page ? "" : `?page=${Number(page)+1}`}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>



<ActivityTable arr={entries}/>


{/* { if(view == 'card'){
return (<ActivityCard className="mx-2" arr={entries}/> )

}} */}




{/* <ActivityTable arr={entries}/> */}

   </main>

  );
}
