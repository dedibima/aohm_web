import { Card,CardContent,CardHeader,CardTitle ,CardDescription} from "@/components/ui/card"

export default function Hero () {
    return (
        <main>
<div className="flex items-center mx-auto my-auto">
<Card className="ring-[2px] ring-blue-400 items-center mx-auto py-24 bg-primary/10 backdrop-blur-[1px] h-max w-4/6">
<CardHeader >
    <CardTitle className="text-6xl font-extrabold text-left ">
        Welcome to <span className="text-primary"> AOHM </span> 
    </CardTitle>
    <CardDescription className="pb-0 mb-0 text-left text-xl">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        AOHM stands for <span className="text-primary font-bold">Airport Operation Hours Management</span>, aiming to make the process of operation hour change easier and faster for both authorities and users.
    </CardDescription>
    
</CardHeader>


</Card>

</div>
</main>
    )
}