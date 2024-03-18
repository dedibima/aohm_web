"use client"
import usePrivateAxios from '@/lib/hooks/privateAxios'
import { useState,useEffect } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import Image from 'next/image'


// import logo from "/logo_lni.png"
// import { useRouter } from 'next/navigation'
// import {getUser} from '@/lib/data'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

// import { getActivity,getUser } from '@/lib/data'
  







export default function Page({params}) {
  const privateAxios = usePrivateAxios()
const [activity,setActivity] = useState({})
const [userid,setUserID] = useState()
const [user,setUser] = useState()


const getActivity =  async () => {
 try {
   const response = await privateAxios.get(`/activity/${params.id}`)
   setActivity(response.data.data)
   setUserID(response.data.data.submitted_by)
   const userdata = await privateAxios.get(`/users/${response.data.data.submitted_by}`)
   setUser(userdata.data.name)
 } catch (error) {
  console.log(error)
 }
}

useEffect( () => {
  getActivity()
  
  },[userid])

// const getUser =  async (id) => {
// try {
//   console.log(userid)
//     const response = await privateAxios.get(`/users/${id}`)
//     setUser(response.data.name)
// } catch (error) {
//   console.log(error)
// }
// }

// useEffect( () => {
//   getUser(userid)
//   },[])

// const gofetch = async () => {
//   try {
//     const act = await privateAxios.get(`/activity/${params.id}`)
//     act.json()
//     setActivity(act.data.data)
//     setUserID(act.data.data.submitted_by)
//     const us = await privateAxios.get(`/users/${userid}`)
//     setUser(us.data.name)
// return {act,us}
//   } catch (error) {
//     console.log(error)
//   }
// }







// useEffect(() => {

//   const getUser = () => {
//     return privateAxios.get(`/users/${userid}`).then(response => setUser(response.data.name))
//   }

//   getUser()
// },[])



// console.log(activity.submitted_by)
console.log(typeof(userid))
console.log(user)
  return (
    <main>
      <p>{user}</p>
    {/* <p className="col-start-1 col-end-3">Callsign</p>
    <p className="col-end-7 col-span-2 text-right">{activity.callsign}</p>
    <p className="col-start-1 col-end-3">Route</p>
    <p className="col-end-7 col-span-2 text-right">{activity.origin} - {activity.destination}</p>
    <p className="col-start-1 col-end-3">Time</p>
    <p className="col-end-7 col-span-2 text-right mb-12">{`${activity.start}`.slice(0,5)} </p>
    <p className='col-span-7'> Untuk pertimbangan operasional, kami siap untuk diberikan waktu toleransi perubahan OH yaitu 15 menit sebelum atau 15 menit sesudah dari persetujuannya yang diberikan.</p>
    <p className='col-span-7'> Demikian pengajuan ini kami sampaikan, atas perhatian dan persetujuannya kami ucapkan terima kasih.</p> */}
    {/* <Card className="w-3/4 mx-auto text-xs" >
        <CardContent>
        <div className='container flex flex-col items-center my-2 py-2'>
        <Image className='flex' src="/logo_lni.png" width={180} height={180}/>
        </div>

        <div className='grid grid-cols-3 mx-2 mt-12 text-sm text-pretty'>
        <p className='mb-12 col-span-7 text-sm'>Request No. : {activity.id} </p>
        <p className='mb-12 col-span-7' >Kepada YTH. Perum LPPNPI Cabang Ambon </p>
        <p className='col-span-7'> Dengan Hormat,</p>
<p className='col-span-7 mb-12'>Berikut ini kami sampaikan permohonan <span className='normal-case font-semibold'>{activity.category} </span>disebabkan alasan <span className='lowercase font-semibold'>{activity.reason}</span> dengan detail:</p>
        

<div className='col-span-7'>
<Table className="text-center text-xs mb-12">
  <TableHeader className="border-2 bg-secondary border-black/5">
    <TableRow>
      <TableHead rowSpan={2} className="text-center ">CALLSIGN</TableHead>
      <TableHead rowSpan={2}className="text-center ">ROUTE</TableHead>
      <TableHead colSpan={2} className="text-center">SCHEDULE</TableHead>
      <TableHead rowSpan={2} className="text-center">OH REQ</TableHead>
      <TableHead rowSpan={2} className="text-center">DATE PERIOD</TableHead>
    </TableRow>
    <TableRow>
      <TableHead className="text-center">STD</TableHead>
      <TableHead className="text-center">STA</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="border-2 border-black/5">
    <TableRow>
      <TableCell className="font-medium">{activity.callsign}</TableCell>
      <TableCell>{activity.origin} - {activity.destination} </TableCell>
      <TableCell>{activity.origin} - {activity.destination} </TableCell>
      <TableCell>{activity.origin} - {activity.destination} </TableCell>
      <TableCell className="text-center">22 Feb 2024</TableCell>
    </TableRow>
  </TableBody>
</Table>
<p className='col-span-7'> Untuk pertimbangan operasional, kami siap untuk diberikan waktu toleransi perubahan OH yaitu 15 menit sebelum atau 15 menit sesudah dari persetujuannya yang diberikan.</p>
    <p className='col-span-7 mb-12'> Demikian pengajuan ini kami sampaikan, atas perhatian dan persetujuannya kami ucapkan terima kasih.</p>
</div>
<p className='text-sm col-end-7 col-span-3'> Ambon, 20 Februari 2024</p>
<p className='text-sm col-end-7 col-span-3 mb-4'> Station Manager PT Lion Air Cabang Ambon</p>
<Image className='col-end-7 col-span-3 mx-auto' src="/TTD_LION.png" width={150} height={150}/>
<p className='text-sm col-end-7 col-span-3 mb-4 mx-auto'> SALDI ALHABSYI</p>


        </div>
        
        </CardContent>

    
    </Card> */}
      {/* <TableCell>{activity.start.slice(0,5)}Z - {activity.end.slice(0,5)}Z</TableCell> */}
    </main>
  )
}
