import DashBoardHeader from '@/components/dashboard/DashBoardHeader'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";

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
          <button className='py-1 px-2 bg-purple-500 rounded-md '>
            添加用户
          </button>
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
                  <Link href={`/dashboard/users/`} className='bg-green-200 p-2 rounded-md'>
                    编辑
                  </Link>
                  <Link href={`/dashboard/users/`} className='bg-red-200 p-2 rounded-md'>
                    删除
                  </Link>
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