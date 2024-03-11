"use client";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Button } from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";






export default function InputForm() {
const form = useForm({
    defaultValues: {
      category: "",
      reason: "",
      period_start: "",
      period_end: "",
      aircrafts: [
        {
          callsign: "",
          origin: "",
          destination: "",
          type: "",
          reg: "",
          STD: "",
          STA: "",
          days: 0,
          daysOfWeek: 0
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
  const [check,setCheck] = useState(0)
  const { toast } = useToast();

  const sendData = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/activity/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setStatus(res.status);


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


  const handleCheckedChange = (checked, value, index) => {
    let updatedDays = form.getValues(`aircrafts.${index}.days`);
    const dayValue = parseInt(value);
    if (checked) {
      updatedDays |= dayValue;
    } else {
      updatedDays &= ~dayValue;
    }
    form.setValue(`aircrafts.${index}.days`,updatedDays)
  };


  async function onSubmit(data) {
    console.log(data)
    sendData(data);
  }





  const daysOfWeek = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 4, label: '3' },
    { value: 8, label: '4' },
    { value: 16, label: '5' },
    { value: 32, label: '6' },
    { value: 64, label: '7' },
  ];

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
                      <SelectItem value="Extend">Extend</SelectItem>
                      <SelectItem value="Advance">Advance</SelectItem>
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
                      <SelectItem value="Weather">Weather</SelectItem>
                      <SelectItem value="Operational">Operational</SelectItem>
                      <SelectItem value="Technical">Technical</SelectItem>
                      <SelectItem value="Vip">VIP</SelectItem>
                      <SelectItem className="italic" value="Force Majeur">
                        Force Majeur
                      </SelectItem>
                      <SelectItem value="Other">Other (Please Specify) </SelectItem>
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
                 
                    <FormField
                  className="flex flex-col w-full"
                  control={form.control}
                  name={`aircrafts.${index}.days`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Days of Week</FormLabel>
                      
                      <div className="flex flex-row justify-between">
                        {daysOfWeek.map((day) => (
                          <div key={day.label} className="flex flex-col items-center">
                          

                  <FormControl>
                  <Checkbox
                  className=" my-2"
                    checked={field.day}
                    onCheckedChange={(checked) =>
                    handleCheckedChange(checked, day.value, index)
                    }
                            > 
                  </Checkbox>
                  </FormControl>

                  <FormLabel className="mx-2  leading-normal">{day.label}</FormLabel>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                /> 
                  
                

                    {index > 0 && (
                      <Button
                        className="mr-2 my-2 text-xs"
                        variant="destructive"
                        size=""
                        onClick={() => dynamic.remove(index)}
                      >
                        Delete Aircraft
                      </Button>
                    )}
                    <Separator />
                  </div>
                );
              })}

              <div id="addAircraft">
                <Button
                  variant="outline"
                  className="mr-2 my-4 text-xs w-full "
                  type="button"
                  onClick={() => dynamic.append({
                    callsign:"",
                    reg:"",
                    type:"",
                    origin:"",
                    destination:"",
                    STD:"",
                    STA:"",
                    days:0
                })}
                >
                  Add Aircraft
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




