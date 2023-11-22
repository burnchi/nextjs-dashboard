import DashBoardHeader from '@/components/dashboard/DashBoardHeader'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button"
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

const ManageUserpage = () => {
  return (
    <>
      <DashBoardHeader title='用户管理'></DashBoardHeader>
      <div className='flex flex-col gap-y-5 border'>
        {/* 搜索和添加功能 */}
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-x-3 px-2 py-1  rounded-md border ">
            <CiSearch />
            <input type="text" placeholder="搜索文章..." className=" border-none outline-none text-lg font-medium " />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">添加用户</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>添加用户</DialogTitle>
                <DialogDescription>
                  按照提示填写信息
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    昵称
                  </Label>
                  <Input id="name" placeholder='小明' className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    电子邮件
                  </Label>
                  <Input id="username" placeholder='100000@qq.com' className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    用户角色
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="普通用户" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">普通用户</SelectItem>
                      <SelectItem value="dark">超级用户</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    用户状态
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="激活" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">激活</SelectItem>
                      <SelectItem value="dark">禁止</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>
              <DialogFooter>
                <Button type="submit">保存</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {/* 展示栏 */}
        <table className='w-full'>
          <thead className=''>
            <tr>
              <td className='p-2'>昵称</td>
              <td className='p-2'>电子邮件</td>
              <td className='p-2'>创建日期</td>
              <td className='p-2'>角色</td>
              <td className='p-2'>状态</td>
              <td className='p-2'></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2'>
                <div className='flex items-center gap-x-2'>
                  <Image
                    src="/Avatar.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className=' rounded-full'
                  />
                  111
                </div>
              </td>
              <td className='p-2'>
                127@qq.com
              </td>
              <td className='p-2'>
                2022-10-1
              </td>
              <td className='p-2'>
                普通用户
              </td>
              <td className='p-2'>
                激活
              </td>
              <td className='p-2'>
                <div className='flex gap-x-2'>
                  <Dialog>
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
                          <Label htmlFor="name" className="text-right">
                            昵称
                          </Label>
                          <Input id="name" placeholder='小明' className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            电子邮件
                          </Label>
                          <Input id="username" placeholder='100000@qq.com' className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            用户角色
                          </Label>
                          <Select>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="普通用户" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">普通用户</SelectItem>
                              <SelectItem value="dark">超级用户</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            用户状态
                          </Label>
                          <Select>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="激活" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">激活</SelectItem>
                              <SelectItem value="dark">禁止</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                      </div>
                      <DialogFooter>
                        <ToastButton msg='保存' />
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <ToastButton msg='删除' />
                </div>
              </td>
            </tr>
          </tbody>

        </table>

        {/* 换页栏 */}
        <div></div>

      </div >
    </>
  )
}

export default ManageUserpage