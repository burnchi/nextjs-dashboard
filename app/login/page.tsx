"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Loginpage = () => {

    const router = useRouter() 
    const handleClick = (e: any) => {
        router.push('/dashboard')
    }
    return (
        <div className=' w-screen h-screen justify-center items-center flex'>
            <form className='min-w-[400px]  p-10 flex flex-col gap-y-4 border'>
                <h1 className=' text-center text-2xl font-semibold mb-4'>登录界面</h1>
                <input
                    type='text'
                    placeholder='账号'
                    name='account'
                    className='border h-[5vh] px-3 outline-none'
                    />
                <input
                    type='password'
                    placeholder='密码'
                    name='pwd'
                    className='border h-[5vh] px-3 outline-none'
                />
                {/* 提交按钮 */}
                <button
                    // 如果没登录禁止提交
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
                    onClick={handleClick}
                >
                    
                    <Link href='/dashboard'>Submit</Link>
                </button>
            </form>
        </div>
    )
}

export default Loginpage