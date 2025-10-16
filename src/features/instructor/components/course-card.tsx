import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MoreVertical, Star, User } from "lucide-react"
import Image from "next/image"


export const CourseCard = () => {
    return (
        <Card className="pt-0 pb-3 gap-2">
            <Image src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=739" alt="eat_sleep_code_repeat"  className="!w-full" quality={100} width={300} height={100}  />
            <CardHeader className="py-1">
                <Badge>Development</Badge>
                <CardTitle className="text-[.98rem] leading-5">
                    Data Structures & Algorithms Essentials
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="flex-between px-4 py-0">
                <div className="flex items-center gap-1">
                    <Star className="fill-yellow-500 stroke-0 w-4 h-4"/>
                    <span>4.5</span>
                </div>
                <div className="flex items-center gap-1">
                    <User className="text-indigo-500 w-4 h-4" />
                    <span className="font-medium text-sm">23,232</span>
                    <span className="text-sm opacity-80">students</span>
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex-between">
                <strong className="text-lg text-orange-500">$5000</strong>
                <MoreVertical className="h-4 w-4" />
            </CardFooter>
        </Card>
    )
}