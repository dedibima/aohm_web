

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"



const getData = async () => {
    const res = await fetch('https://api.sampleapis.com/coffee/hot');
    const array = await res.json();
    return array
  }

export default async function App({searchParams}) {
  const data = await getData()
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '10'
  

  const start = (Number(page)-1) * Number(per_page)
  const end = start + Number(per_page)

  const entries = data.slice(start,end)
  const last_page = Math.ceil(Number(data.length) / Number(per_page))
//   const prev_link = page ===
//   const next


  console.log(last_page)




  return (
    // <div className="flex flex-col gap-2 items-center">
     


     <Pagination className="flex flex-col items-center">
        <div className="flex flex-col py-8 my-8">
  {entries.map((entry) => (
    <p key={entry.id}> {entry.id} : {entry.title} test {last_page} </p>

))}
</div>
  <PaginationContent >
    
    <PaginationItem>
      <PaginationPrevious href={`${page==1 ? "" : `?page=${Number(page)-1}`}`}/>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis href="" />
    </PaginationItem>
    <PaginationItem >
      <PaginationNext href={`${page==last_page ? "" : `?page=${Number(page)+1}`}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
      



    // </div>
  )
}

export  {App}