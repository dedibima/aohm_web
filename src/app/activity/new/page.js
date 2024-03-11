"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";

import {useState} from 'react';
import { useForm,useFieldArray } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';


export default function InputForm() {
  const form = useForm({
    defaultValues: {
      category: "",
      reason:"",
      callsign:"",
      origin:"",
      destination:"",
      period_start:"",
      period_end:"",
      start:"",
      end:"",
      aircrafts: [{
        callsign: "",
        origin:"",
        destination:"",
        type:"",
        reg:"",
        STD:"",
        STA:"",
        days:0
      }]
    },
    
  })


  const handleCheckboxChange = (aircraftIndex, day, isChecked) => {
    const currentDays = watch(`aircrafts[${aircraftIndex}].days`) || 0;
    if (isChecked) {
      setValue(`aircrafts[${aircraftIndex}].days`, currentDays | (1 << day));
    } else {
      setValue(`aircrafts[${aircraftIndex}].days`, currentDays & ~(1 << day));
    }
  };


  const [status,setStatus] = useState(false)
  const { toast } = useToast()

  const sendData = async (data) => { 
    try {
      const res = await fetch('http://localhost:3001/activity/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(await res)
    const result = await res.json()
    setStatus(res.status)
    // console.log(await result.message)
    


    await toast({
                    title: "You submitted the following values:",
                    description: (
                      <pre className="mt-2 w-[340px] rounded-md bg-secondary">
                        <code className="text-secondary-foreground capitalize">
                          <ul>
                            <li>Category : {data.category} </li>
                            <li>Reason : {data.reason}</li>
                            <li>Callsign : {data.callsign}</li>
                            <li>Route : {data.origin} - {data.destination}</li>
                            <li>Period : {data.period_start} - {data.period_end}</li>
                            <li>Time : {data.start} - {data.end}</li>
                            <li>status : {await result.message}</li>
                            <li>Activity Id: {result.data.activity_id}</li>
                          </ul>
                          </code>
                      </pre>
                    ),
                  })
                 setTimeout(form.reset,500)
    
    } catch (error) {
     console.log(error) 
  
    }
  }





  async function onSubmit(data) {
    sendData(data)
    
    
    
    
    
  }
  
  return (
    <main>
    
    <Form {...form}>
    <Card className="w-full lg:w-1/2 p-2 mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-4 space-y-6 mx-auto px-4 ">
        <FormField
          id="category"
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select OH Change Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="extend">Extend</SelectItem>
                  <SelectItem value="advance">Advance</SelectItem>
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
          />
 <FormField
          id="reason"
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select OH Change Reason" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="weather">Weather</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                  <SelectItem className="italic" value="force majeur">Force Majeur</SelectItem>
                  <SelectItem value="other">Extend</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
          />

<FormField 
          control={form.control}
          name="callsign"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Callsign</FormLabel>
              <FormControl>
              <Input className="flex w-min-full" type="text" placeholder="ex : GIA647" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />


<div id="route" className="flex flex-row space-x-2 justify-between ">
        <FormField 
          className="flex"
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem className="w-1/2 gap lg:w-1/3">
              <FormLabel>Origin</FormLabel>
              <FormControl>
              <Input className="flex w-min-full" type="text" placeholder="ex : WIII" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />


        <FormField 
        className="flex"
        control={form.control}
        name="destination"
        render={({ field }) => (
          <FormItem className="w-1/2 lg:w-1/3">
              <FormLabel>Destination</FormLabel>
              <FormControl>
              <Input className="flex w-min-full" type="text" placeholder="ex : WIII" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
          />

        

</div>


        <div id="period_selector" className="flex flex-row space-x-2 justify-between">
        <FormField 
          className="flex"
          control={form.control}
          name="period_start"
          render={({ field }) => (
            <FormItem className="w-1/2 lg:w-1/3">
              <FormLabel>Start Date</FormLabel>
              <FormControl>
              <Input className="flex w-min-full" type="date" placeholder="name@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField 
         className="flex"
         control={form.control}
         name="period_end"
         render={({ field }) => (
           <FormItem className="w-1/2 lg:w-1/3">
              <FormLabel>End Date</FormLabel>
              <FormControl>
              <Input className="flex w-min-full" type="date" placeholder="End Date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

</div>

<div id="time" className="flex space-x-2  justify-between flex-row ">
        <FormField 
        className="flex"
        control={form.control}
        name="start"
        render={({ field }) => (
          <FormItem className="w-1/2 lg:w-1/3">
              <FormLabel>Start Date</FormLabel>
              <FormControl>
              <Input className="flex w-min-full " type="time" placeholder="name@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
        className="flex" 
        control={form.control}
        name="end"
        render={({ field }) => (
          <FormItem className="w-1/2 lg:w-1/3">
              <FormLabel>End Date</FormLabel>
              <FormControl>
              <Input className="flex w-min-full " type="time" placeholder="End Date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

</div>


        <Button type="submit">Submit</Button>
      </form>
      </Card>
    </Form>
    
    </main>
  )
}






















// export default function NewAct() {
  //     const [status,setStatus] = useState(false)
  
  // 	const [activity, setActivity] = useState({
    // 		category: '',
    // 		reason: '',
    //         callsign: ''
    
    // 	});
    // 	// const [user, setUser] = useState();
    
    // 	const onSubmit = async (e) => {
      // 		e.preventDefault();
      // 		// if (activity.category === '' || activity.reason === '' || activity.callsign === '')
      // 		// 	return alert('Check again!.');
      
      // 		await fetch('http://localhost:3001/activity/create', {
        // 			method: 'POST',
        // 			headers: {
          // 				'Content-Type': 'application/json'
          // 			},
          // 			body: JSON.stringify(activity)
          // 		})
          // 			.then((res) => {
            //                 res.json()
            //                 console.log("submitted")
            //             })
            //             .then(setStatus(true))
            // 	}
            
            
            //     return (
              //         <main>
              //  <div className="grid grid-cols-2">
              //         <Card className="grid grid-cols-1 gap-6 ">
              //             <CardHeader>
              //                 <CardTitle> Request New Activity</CardTitle>
              //                 <CardDescription>Input your activity details below </CardDescription>
              //             </CardHeader>
              //             <CardContent>
              //             <form onSubmit={onSubmit}>
              //                 <div>
              //                 <div id="actType">
              //             <Label className="ml-2.5" htmlFor="terms">Activity Type</Label>
              //             <Select 
              //                 onValueChange={(e) => {
                //                     setActivity({
                  //                         ...activity,
                  //                         category: e.onChange
                  //                     });
                  //                 }}            
                  //                  name="category"  className="" >
                  //                 <SelectTrigger className="w-full">
                  //                     <SelectValue placeholder="-" />
                  //                 </SelectTrigger>
                  //                 <SelectContent>
                  //                     <SelectItem value="advance">Advance</SelectItem>
                  //                     <SelectItem value="extend">Extend</SelectItem>
                  //                 </SelectContent>
                  //             </Select>
                  //             </div>
                  //             <div id="reason" className="mt-4">
                  //             <Label className="ml-2.5" htmlFor="terms">Reason </Label>
                  //             <Select onValueChange={(e) => {
                    //                     setActivity({
                      //                         ...activity,
                      //                         reason: e.onChange
                      //                     });
                      
                      //                 }} name="reason" className="">
                      //                 <SelectTrigger className="w-full">
                      //                     <SelectValue placeholder="-" />
                      //                 </SelectTrigger>
                      //                 <SelectContent >
                      //                     <SelectItem value="weather">Weather</SelectItem>
                      //                     <SelectItem value="operational">Operational</SelectItem>
                      //                     <SelectItem value="technical">Technical</SelectItem>
                      //                     <SelectItem value="vip">VIP</SelectItem>
                      //                     <SelectItem value="other">Other</SelectItem>
                      //                 </SelectContent>
                      //             </Select>
                      //             </div>
                      //                 </div>
                      //                 <div id="callsign"className="mt-4">
                      //                 <Label className="ml-2.5" htmlFor="name">Callsign</Label>
                      //                 <Input value={activity.callsign} name="callsign" type="name" placeholder="ex:XXX123" onChange={(e) => { setActivity({
                        //                         ...activity,
                        //                         callsign: e.target.value
                        //                     })
                        //                     console.log(activity.callsign);
                        //                 }}      />
                        //                 </div>
                        //                 <div id="route" className="flex flex-row justify-between mt-4">
                        //                 <div className="">
                        //                 <Label className="ml-2.5" htmlFor="name">Origin</Label>
                        //                 <Input value={activity.origin} onChange={(e) => {
                          //                     setActivity({
                            //                         ...activity,
                            //                         origin: e.target.value
                            //                     });
                            //                 }}      name="origin" className="w-60" type="name" placeholder="ex: WAPP" />
                            //                 </div>
                            //                 <div className="">
                            //                 <Label className="ml-2.5" htmlFor="name">Destination</Label>
                            //                 <Input value={activity.destination} onChange={(e) => {
                              //                     setActivity({
                                //                         ...activity,
                                //                         destination: e.target.value
                                //                     });
                                //                 }}      name="destination" className="w-60" type="name" placeholder="ex: WIII" />
                                //                 </div>
                                //                 </div>
                                //                 <div id="datepicker" className="mt-4 flex flex-row justify-between">
                                //                     <div className="">
                                //                 <Label className="ml-2.5" htmlFor="date">Start Date</Label>
                                //                 <Input value={activity.period_start} onChange={(e) => {
                                  //                     setActivity({
                                    //                         ...activity,
                                    //                         period_start: e.target.value
                                    //                     });
                                    //                 }}       name="period_start" className="w-60" type="date" placeholder="name@company.com" />
                                    //                     </div>
                                    //                     <div>
                                    //                 <Label className="ml-2.5"htmlFor="date">End Date</Label>
                                    //                 <Input value={activity.period_end} onChange={(e) => {
                                      //                     setActivity({
                                        //                         ...activity,
                                        //                         period_end: e.target.value
                                        //                     });
                                        //                 }}       name="period_end" className= "w-60" type="date" placeholder="name@company.com" />
                                        //                 </div>
                                        //                 </div>
                                        //                 <div id="timepicker" className="mt-4 flex flex-row justify-between">
                                        //                     <div className="">
                                        //                 <Label className="ml-2.5" htmlFor="time">Start Time</Label>
                                        //                 <Input value={activity.start} onChange={(e) => {
                                          //                     setActivity({
                                            //                         ...activity,
                                            //                         start: e.target.value
                                            //                     });
                                            //                 }}       name="start" className="w-60" type="time" placeholder="time" />
                                            //                 </div>
                                            //                 <div>
                                            //                 <Label className="ml-2.5" htmlFor="time">End Time</Label>
                                            //                 <Input value={activity.end} onChange={(e) => {
                                              //                     setActivity({
                                                //                         ...activity,
                                                //                         end: e.target.value
                                                //                     });
                                                //                 }}       name="end" className="w-60" type="time" placeholder="time" />
                                                //                 </div> 
                                                //                 </div>
                                                //                 <Button type="submit" className="mt-10 w-full">Submit</Button>
                                                
                                                //                 </form>
                                                //                 <Button className= { status ? 'mt-6 bg-green-100 text-green-900 w-full' : 'hidden'}> Success</Button>
                                                //             </CardContent>
                                                //         </Card>
                                                //         </div>
                                                
                                                
                                                
                                                
                                                //         </main>
                                                //     )
                                                
                                                // }
                                                
                                                
                                                // setSent(true)
                                                
                                                // await fetch('http://localhost:3001/activity/create', {
                                                // 	method: 'POST',
                                                // 	headers: {
                                                // 		'Content-Type': 'application/json'
                                                // 	},
                                                // 	body: JSON.stringify(data)
                                                // })
                                                
                                                // console.log(data)
                                                
                                                
                                                
                                                
                                                
                                                
                                                // 	.then(async (res) => {
                                                //             // res.json()
                                                //             const result = await res.json()
                                                //             setStatus(result.message)
                                                
                                                //             await toast({
                                                //               title: "You submitted the following values:",
                                                //               description: (
                                                //                 <pre className="mt-2 w-[340px] rounded-md bg-secondary">
                                                //                   <code className="text-secondary-foreground capitalize">
                                                //                     <ul>
                                                //                       <li>Category : {result.data.category} </li>
                                                //                       <li>Reason : {result.data.reason}</li>
                                                //                       <li>Callsign : {result.data.callsign}</li>
                                                //                       <li>Route : {result.data.origin} - {data.destination}</li>
                                                //                       <li>Period : {result.data.period_start} - {data.period_end}</li>
                                                //                       <li>Time : {result.data.start} - {result.data.end}</li>
                                                //                       <li>status : {result.message}</li>
                                                //                     </ul>
                                                                    
                                                //                     </code>
                                                //                 </pre>
                                                //               ),
                                                //             })
                                                
                                                
                                                //             return result.message
                                                //         })
                                                //         .then(setSent(true))
                                                //         .then(form.reset())
                                                      
                                                      
                                                        // const waduh = await sendData()
                                                
                                                
                                                
                                                
                                                