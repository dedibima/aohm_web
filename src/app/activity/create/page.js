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

  import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export default  async function Create() {

return (
    <main>

        <div className="grid grid-cols-2">
        <Card className="grid grid-cols-1 gap-6 ">
            <CardHeader>
                <CardTitle> Request New Activity</CardTitle>
                <CardDescription>Input your activity details below </CardDescription>
            </CardHeader>
            <CardContent>
            <form action="http://localhost:3001/activity/create" method="post">
                <div>
                <div id="actType">
            <Label className="ml-2.5" htmlFor="terms">Activity Type</Label>
            <Select name="category" className="">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="advance">Advance</SelectItem>
                    <SelectItem value="extend">Extend</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <div id="reason" className="mt-4">
            <Label className="ml-2.5" htmlFor="terms">Reason </Label>
            <Select name="reason" className="">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="operational">Operational</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>
            </div>
                </div>
                <div id="callsign"className="mt-4">
                <Label className="ml-2.5" htmlFor="name">Callsign</Label>
                <Input name="callsign" type="name" placeholder="ex:XXX123" />
                </div>
                <div id="route" className="flex flex-row justify-between mt-4">
                <div className="">
                <Label className="ml-2.5" htmlFor="name">Origin</Label>
                <Input name="origin" className="w-60" type="name" placeholder="ex: WAPP" />
                </div>
                <div className="">
                <Label className="ml-2.5" htmlFor="name">Destination</Label>
                <Input name="destination" className="w-60" type="name" placeholder="ex: WIII" />
                </div>
                </div>
                <div id="datepicker" className="mt-4 flex flex-row justify-between">
                    <div className="">
                <Label className="ml-2.5" htmlFor="date">Start Date</Label>
                <Input name="period_start" className="w-60" type="date" placeholder="name@company.com" />
                    </div>
                    <div>
                <Label className="ml-2.5"htmlFor="date">End Date</Label>
                <Input name="period_end" className= "w-60" type="date" placeholder="name@company.com" />
                </div>
                </div>
                <div id="timepicker" className="mt-4 flex flex-row justify-between">
                    <div className="">
                <Label className="ml-2.5" htmlFor="time">Start Time</Label>
                <Input name="start" className="w-60" type="time" placeholder="time" />
                </div>
                <div>
                <Label className="ml-2.5" htmlFor="time">End Time</Label>
                <Input name="end" className="w-60" type="time" placeholder="time" />
                </div>
                </div>
                <Button type="submit" className="mt-10 w-full">Submit</Button>
                </form>
            </CardContent>
        </Card>
        </div>


    
    </main>
)


}