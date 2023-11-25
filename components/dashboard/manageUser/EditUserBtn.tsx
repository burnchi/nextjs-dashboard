"use client"
import React, { ChangeEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import ToastButton from '@/components/dashboard/ToastButton';
  import { Button } from "@/components/ui/button"
  import axios from 'axios';
  import { useRouter } from 'next/navigation'
  import { useToast } from "@/components/ui/use-toast"

const EditUserBtn = ({ user }:{ user:any }) => {
    const [formData, setFormData] = useState({
        username: user.name,
        email: user.email,
        role: user.role,
        active: user.active
    });
    const [open, setOpen] = React.useState(false);
    const router = useRouter()
    const { toast } = useToast()

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        e.preventDefault();
        // console.log('11');
        
        const { name, value } = e.target;
        // console.log({ name, value });
        if (value === 'true' || value === 'false') {
            const booleanValue = value === 'true';

            setFormData({
                ...formData,
                [name]: booleanValue,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });

        }
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // console.log(formData);
        if (formData.email.length === 0 || formData.username.length === 0) {
            toast({
                variant: 'destructive',
                title: `部分字段为空`,
                description: `昵称或电子邮件不能为空！`,
            })
        }else{
            try {
                const response = await axios.post('/api/user/update', {id:user.id,...formData});
    
                // 插入数据之后页面跳转
                if (response.status === 200) {
                    router.refresh()
                    setOpen(false)
                    toast({
                        title: `执行更改操作`,
                        description: `${formData.username} 更改成功`,
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">编辑</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>编辑用户资料</DialogTitle>
                    <DialogDescription>
                        修改完点击保存
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            昵称
                        </Label>
                        <Input id="name" name='username' value={formData.username} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            电子邮件
                        </Label>
                        <Input id="emial" name='email' value={formData.email} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            用户角色
                        </Label>
                        <select name="role" value={formData.role} onChange={handleChange}
                            className='flex col-span-3 h-10  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm     ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 '>
                            <option value="user" >普通用户</option>
                            <option value="vip">会员用户</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="active" className="text-right">
                            用户状态
                        </Label>
                        <select name="active" value={String(formData.active)} onChange={handleChange} className='flex h-10 col-span-3 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                            <option value="true">激活</option>
                            <option value="false">禁用</option>
                        </select>
                    </div>

                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>保存</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditUserBtn