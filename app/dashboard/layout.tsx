"use client"
import { siteMessage } from '@/lib/siteMessage'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { RxText } from "react-icons/rx";
import { PiChatCircleTextLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoCloudUploadOutline,IoBanOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { IoIosHelpCircleOutline, } from "react-icons/io";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()

    const menuList = [
        {
            title: '仪表盘',
            link: '/dashboard',
            icon: <RxDashboard size={20} />
        },
        {
            title: '文章管理',
            link: '/dashboard/managePost',
            icon: <RxText size={20} />
        },
        {
            title: '评论管理',
            link: '/dashboard/manageComment',
            icon: <PiChatCircleTextLight size={20} />
        },
        {
            title: '用户管理',
            link: '/dashboard/manageUser',
            icon: <FiUsers size={20} />
        },
        {
            title: '上传图片',
            link: '/dashboard/upload',
            icon: <IoCloudUploadOutline size={20} />
        },
        {
            title: '黑名单',
            link: '/dashboard/blackList',
            icon: <IoBanOutline  size={20} />
        },
        {
            title: '设置',
            link: '/dashboard/settings',
            icon: <CiSettings size={20} />
        },
    ]
    return (
        <div className='flex'>
            {/* 左侧栏 */}
            <div className='w-[15vw] h-[100dvh] flex flex-col bg-black/90 p-5 gap-y-10 relative text-white/60'>
                <div className='flex items-center gap-x-4 text-white'>
                    {/* <Image src="/Avatar.jpg" alt='_' width={40} height={20}
                        className=' ring-1 rounded-full object-cover' /> */}
                    <span className=' bg-zinc-700 w-[40px] h-[40px] rounded-full flex items-center justify-center font-semibold'>
                        {siteMessage.author[0]}
                    </span>
                    <span
                        className=' font-semibold text-lg capitalize '
                    >{siteMessage.author}</span>
                </div>
                {/* 菜单 */}
                <div className=' flex flex-col gap-y-3'>
                    {
                        menuList.map(menu => <Link href={menu.link} key={menu.title} className={
                            path === menu.link ?
                                'flex gap-x-4 py-2 pl-2 rounded-md items-center bg-zinc-700 text-white' :
                                'flex gap-x-4 py-2 pl-2 rounded-md items-center'
                        }>
                            {menu.icon}
                            <span>{menu.title}</span>
                        </Link>)
                    }
                </div>
                <span className='border'></span>

                <div className='flex flex-col gap-y-3  absolute bottom-5'>

                    <Link href='/dashboard/help' className='flex items-center gap-x-4 py-2 pl-2'>
                        <IoIosHelpCircleOutline size={20} />
                        <span>帮助</span>
                    </Link>
                    <Link href='/dashboard/signout' className='flex items-center gap-x-4 py-2 pl-2'>
                        <GoSignOut size={20} />
                        <span>退出登录</span>

                    </Link>
                </div>

            </div>
            {/* 右侧栏 */}
            <div className='flex-1 flex flex-col py-5 px-10 gap-y-5 '>
                {children}
            </div>
        </div>
    )
}

export default DashBoardLayout