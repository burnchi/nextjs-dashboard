"use client"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "../ui/button"

const ToastButton = ({msg,user}:
  {
    msg:string,
    user:any
  }
  ) => {
    const { toast } = useToast()
    console.log(user);
    
    
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: `${user}`,

        })
      }}
    >
      {msg}
      
    </Button>
  )
}

export default ToastButton