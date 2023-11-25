"use client"
import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DeleteUserBtn = ({ msg, user }:
    {
        msg: string,
        user: any
    }
) => {
    const { toast } = useToast()
    const router = useRouter()

    const handleClick = async () => {
        try {
            const response = await axios.post('/api/user/delete', user);

            // 插入数据之后页面跳转
            if (response.status === 200) {
                router.refresh()
                toast({
                    title: `执行删除操作`,
                    description: `${user.name} 删除成功`,
                })
            }
        } catch (error) {
            console.error(error);
        }
     
    
    }


    return (
        <Button
            onClick={handleClick}
        >
            {msg}
        </Button>
    )
}

export default DeleteUserBtn