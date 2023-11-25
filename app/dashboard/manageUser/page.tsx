import DashBoardHeader from '@/components/dashboard/DashBoardHeader'

import React from 'react'

import prisma from '@/lib/db';
import NewUser from '@/components/dashboard/manageUser/NewUser';

import SearchUserBtn from '@/components/dashboard/manageUser/SearchUserBtn';
import UserTable from '@/components/dashboard/manageUser/UserTable';



const ManageUserpage = async () => {
  const users = await prisma?.user.findMany()
  // console.log(users);

  return (
    <>
      <DashBoardHeader title='用户管理'></DashBoardHeader>
      <div className='flex flex-col gap-y-5 border p-5'>
        {/* 搜索和添加功能 */}
        <div className='flex justify-between items-center'>
          {/* 搜索框 */}
          <SearchUserBtn users={users}></SearchUserBtn>
          {/* 添加用户按钮 */}
          <NewUser></NewUser>
        </div>
        {/* 展示栏 */}
        <UserTable users={users}></UserTable>

        {/* 换页栏 */}
        <div></div>

      </div >
    </>
  )
}

export default ManageUserpage