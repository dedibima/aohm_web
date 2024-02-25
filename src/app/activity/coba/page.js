"use client";

import { Plus, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function InputForm() {
  const form = useForm({
    defaultValues: {
      category: "",
      reason: "",
      callsign: "",
      origin: "",
      destination: "",
      period_start: "",
      period_end: "",
      start: "",
      end: "",
      aircrafts: [
        {
          callsign: "",
          origin: "",
          destination: "",
          type: "",
          reg: "",
          STD: "",
          STA: "",
          DOF: "",
        },
      ],
    },
  });

  const dynamic = useFieldArray({
    control: form.control,
    name: "aircrafts",
  });

  const { fields } = dynamic;

  const [status, setStatus] = useState(false);
  const { toast } = useToast();

  const sendData = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/activity/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(await res);
      const result = await res.json();
      setStatus(res.status);
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
                <li>
                  Route : {data.origin} - {data.destination}
                </li>
                <li>
                  Period : {data.period_start} - {data.period_end}
                </li>
                <li>
                  Time : {data.start} - {data.end}
                </li>
                <li>status : {await result.message}</li>
                <li>Activity Id: {result.data.activity_id}</li>
              </ul>
            </code>
          </pre>
        ),
      });
      setTimeout(form.reset, 500);
    } catch (error) {
      console.log(error);
    }
  };

async function coba(data){
  console.log(data)
}

  async function onSubmit(data) {
    // sendData(data);
    coba(data)
  }

  return (
    <main>
      <Form {...form}>
        <Card className="w-full lg:w-3/5 p-2 mx-auto">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full py-4 space-y-4 mx-auto px-4 "
          >
            <label className="font-semibold ">Request Details</label>
            <Separator className="mt-1"/>

            <FormField
              id="category"
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
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
                      <SelectItem className="italic" value="force majeur">
                        Force Majeur
                      </SelectItem>
                      <SelectItem value="other">Extend</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              id="period_selector"
              className="flex flex-row space-x-8 justify-between "
            >
              <FormField
                className="flex"
                control={form.control}
                name="period_start"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input
                        className="flex w-min-full"
                        type="date"
                        placeholder="name@company.com"
                        {...field}
                      />
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
                  <FormItem className="w-1/2">
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input
                        className="flex w-min-full"
                        type="date"
                        placeholder="End Date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          
            <div>
              {fields.map((field, index) => {
                return (
                  <div
                    className=" flex flex-col content-between space-y-4"
                    key={field.id}
                  >
                    <label className="font-semibold mb-0 mt-10">
                      Aircraft {index + 1} Details{" "}
                    </label>
                    <Separator />
                    <FormField
                        
                        className="flex flex-col"
                        control={form.control}
                        name={`aircrafts.${index}.callsign`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Callsign</FormLabel>
                            <FormControl>
                              <Input
                                className="flex"
                                type="text"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />


                    <div className="flex flex-row space-x-8 justify-between">
                      

                      <FormField
                   
                        className="flex flex-col"
                        control={form.control}
                        name={`aircrafts.${index}.reg`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Registration </FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full"
                                type="text"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        
                        className="flex flex-col"
                        control={form.control}
                        name={`aircrafts.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Aircraft Type </FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full"
                                type="text"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-row space-x-8 justify-between">
                      <FormField
                       
                        className="flex flex-col"
                        control={form.control}
                        name={`aircrafts.${index}.origin`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Origin </FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full"
                                type="text"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                       
                        className="flex flex-col"
                        control={form.control}
                        name={`aircrafts.${index}.destination`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>Destination </FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full"
                                type="text"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div
                      id="time"
                      className="flex space-x-8  justify-between flex-row "
                    >
                      <FormField
                        className="flex"
                        control={form.control}
                        name={`aircrafts.${index}.STD`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>STD</FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full "
                                type="time"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                     
                        className="flex"
                        control={form.control}
                        name={`aircrafts.${index}.STA`}
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel>STA</FormLabel>
                            <FormControl>
                              <Input
                                className="flex w-full "
                                type="time"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {index > 0 && (
                      <Button
                        className="mr-2 my-2 text-xs"
                        variant="destructive"
                        size=""
                        onClick={() => dynamic.remove(index)}
                      >
                        Delete Aircraft
                        {/* <X size={16} className="mx-2"/> */}
                      </Button>
                    )}
                    <Separator />
                  </div>
                );
              })}
              <div className="">
                <Button
                  variant="outline"
                  className="mr-2 my-4 text-xs w-full "
                  // size="icon"
                  onClick={() => dynamic.append()}
                >
                  Add Aircraft
                  {/* <Plus /> */}
                </Button>
              </div>
            </div>

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </Form>
    </main>
  );
}




