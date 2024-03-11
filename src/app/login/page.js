"use client"


import axios from "axios"
import { useState } from "react"
// import { Card,CardContent,CardDescription,CardTitle,CardHeader } from "@/components/ui/card"
import { Form,FormControl,FormField,FormItem,FormDescription,FormLabel,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm} from "react-hook-form";
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import  {useAuthStore}  from "@/lib/AuthStore"; 

// import axiosAPI from "@/lib/axios.js"
// import { Textarea } from "@/components/ui/textarea"




const TestFetch = ({token}) => {
const [id,setId] = useState('')
const [category,setCategory] = useState('category')
const accessToken = useAuthStore((state) => state.accessToken)
    



const handleClick = async () => {
    // console.log(config)

    const axiosConfig = {
        headers: { 
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
      }
      };

try {
    const activityData = await axios.get('http://localhost:3001/activity/1',axiosConfig)

    const {id,category,reason} = activityData.data.data
    console.log(activityData.data)
    setId(id)
    setCategory(category)
} catch (error) {
    console.log(error)
}


}

  return (
    <div>
    <Button className="w-full" onClick={handleClick}> Get Activity </Button>
    <p>Category : {id} </p>
<div>
</div>
</div>
  )
}







const LoginPage =  () => {
    const router = useRouter()
    const [status,setStatus] = useState('')
    const accessToken = useAuthStore((state) => state.accessToken)
    const updateAccessToken = useAuthStore((state) => state.updateAccessToken)
    // const updateFirstName = usePersonStore((state) => state.updateFirstName)
 
    // const [accessToken,setAccessToken] = useState('')

    const formSchema = z.object({
        username: z.string({required_error: "Name is required"}).min(1, {
          message: "Username Required",
        }),
        password: z.string({required_error: "Password is required"}).min(1,{
            message: "Password Required"
        })
      })

//Form Schema
    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        password: "",
      },
})

    const submitHandler = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/login',
            JSON.stringify(data),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    })
    
                    console.log(response.data)
                    // console.log(response.data.message)
                    // setStatus(response.data.message)
                    // setAccessToken(response.data.accessToken)
                    updateAccessToken(response.data.accessToken)
                    console.log(accessToken)
                    // status === "Success" && router.push('/activity')
        } catch (error) {
            // console.log(JSON.stringify(response?.data))
            console.log(error)
            // setStatus(error.response.data.message
        }
    
        }




  return (
<main>
<div className=" space-y-8 w-6/12 py-32 px-16 pt-8 mx-auto  border-2 rounded-lg" >
<h2>Login Form</h2>
<Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
    <div className="flex flex-col border-2">
    <p className="flex text-wrap text-sm mx-2 ">Access Token :   </p>
    <p className="flex text-wrap text-sm mx-2 break-all mb-2">{accessToken}</p>
     
    </div>


<TestFetch token={useAuthStore((state)=> state.accessToken)}/>
</div>
</main>
  )
}

export default LoginPage