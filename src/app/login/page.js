"use client"


// import axios from "@/lib/api/axios"
import { useState } from "react"
// import { Card,CardContent,CardDescription,CardTitle,CardHeader } from "@/components/ui/card"
import { Form,FormControl,FormField,FormItem,FormDescription,FormLabel,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm} from "react-hook-form";
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import  { useAuthStore }  from "@/lib/hooks/AuthStore"; 
import { authenticateUser,getActivity } from "@/lib/data"
import useAxiosPrivate from "@/lib/hooks/privateAxios"

// import axiosAPI from "@/lib/axios.js"
// import { Textarea } from "@/components/ui/textarea"




const TestFetch = ({token}) => {
const [id,setId] = useState('')
const [category,setCategory] = useState('category')
 useAxiosPrivate()

    



const handleClick = async () => {
    // console.log(config)



try {
    const activityData = await getActivity(1)
    console.log(activityData)
    const {id,category} = activityData?.data.data
    setId(id)
    setCategory(category)
} catch (error) {
    console.log(error)

// const activityData = await getActivity(1)

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
    const accessToken = useAuthStore((state) => state.accessToken)
    const updateAccessToken = useAuthStore((state) => state.updateAccessToken)
    const login = useAuthStore((state)=> state.logIn)
    const auth = useAuthStore((state)=> state.auth)
    
    // const updateFirstName = usePersonStore((state) => state.updateFirstName)
    // const [status,setStatus] = useState('')
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
            JSON.stringify(data)
            const response = await authenticateUser(data)
            console.log(response,"res")
            console.log(data,"data")
            login()
            updateAccessToken(response.accessToken)
            
            
            
                    // console.log(accessToken)
                    // console.log(response.data.message)
                    // setStatus(response.data.message)
                    // setAccessToken(response.data.accessToken)
                    // status === "Success" && router.push('/activity')

        } catch (error) {
            console.log(error)
            // console.log(JSON.stringify(response?.data))
            // setStatus(error.response.data.message
        }
    
        }




  return (
<main>
<div className=" space-y-8 sm:w-6/12 sm:py-32 sm:px-16 pt-8 mx-auto  border-2 rounded-lg w-3/4 " >
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
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
    <div className="flex flex-col border-2">
    <p className="flex text-wrap text-sm mx-2 ">Access Token :   </p>
    <p className="flex text-wrap text-sm mx-2 break-all mb-2">{accessToken}</p>
    <p className="flex text-wrap text-sm mx-2 break-all mb-2"> {auth} </p>
     
    </div>


<TestFetch token={accessToken}/>
</div>
</main>
  )
}

export default LoginPage