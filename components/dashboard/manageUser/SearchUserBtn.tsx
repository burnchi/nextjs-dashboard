"use client"
import { useStore } from '@/store';
import React from 'react'
import { CiSearch } from "react-icons/ci";


const SearchUserBtn = ({users}: {users:any[]}) => {
    const searchUserInput = useStore((state) => state.searchUserInput)
    const setsearchUserInput = useStore((state) => state.setsearchUserInput)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchUserInput(e.target.value)
        console.log(searchUserInput);
    }
    return (
        <div className="flex items-center p-3 gap-x-2   ">
            <CiSearch size={24}/>
            <input type="text" placeholder="搜索用户名或电子邮件" className=" border-b   outline-none text-base font-medium" value={searchUserInput} onChange={handleChange} />
        </div>
    )
}

export default SearchUserBtn