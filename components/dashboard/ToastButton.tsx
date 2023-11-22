"use client"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "../ui/button"

const ToastButton = ({msg}:{msg:string}) => {
    const { toast } = useToast()
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      {msg}
    </Button>
  )
}

export default ToastButton