"use client"
import React from 'react'
import Image from 'next/image';
import { format } from 'date-fns'
import DeleteUserBtn from '@/components/dashboard/manageUser/DeleteUserBtn';
import EditUserBtn from '@/components/dashboard/manageUser/EditUserBtn';
import { useStore } from '@/store';

const UserTable = ({ users }: { users: any[] }) => {
    const searchUserInput = useStore((state) => state.searchUserInput)
    const usersList = users.filter(user => user.name.toUpperCase().includes(searchUserInput.toUpperCase()) ||
        user.email.toUpperCase().includes(searchUserInput.toUpperCase())
    )

    return (
        <div>

            <table className='w-full '>
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
                {
                    usersList.map(user => <tbody key={user.id}>
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
                                    {user.name}
                                </div>
                            </td>
                            <td className='p-2'>
                                {user.email}
                            </td>
                            <td className='p-2'>
                                {format(user.createdAt, 'yyyy-MM-dd')}
                            </td>
                            <td className='p-2'>
                                {user.role === "user" ? '普通用户' : "会员用户"}
                            </td>
                            <td className='p-2'>
                                {user.active ? '激活' : "禁止"}
                            </td>
                            <td className='p-2'>
                                <div className='flex gap-x-2'>
                                    <EditUserBtn user={{ ...user }}></EditUserBtn>
                                    <DeleteUserBtn msg='删除' user={{ ...user }}></DeleteUserBtn>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    )
                }
            </table>
            {
                usersList.length === 0 &&
                <div className=' w-full  text-center p-10 font-semibold text-lg'>查无此人...</div>
            }
        </div>
    )
}

export default UserTable