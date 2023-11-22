import React from 'react'
import { CiBellOn,CiSearch,CiHome  } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const DashBoardHeader = ({title}:{title:string}) => {
    return (
        <div className="flex justify-between py-2 items-center text-2xl font-semibold ">
            <h1 className="">{title}</h1>
            <div className="flex items-center gap-x-3 px-2 py-1  rounded-md border">
                <CiSearch />
                <input type="text" placeholder="搜索..." className=" border-none outline-none text-lg font-medium" />
            </div>
            <div className="flex gap-x-1 items-center">
                <button className="
                        p-2  rounded-md bg-slate-100
                        "><CiBellOn size={30} /></button>
                <button className="
                        p-2 rounded-md bg-slate-100
                        "><CiHome size={30} /></button>

            </div>
        </div>
    )
}

export default DashBoardHeader