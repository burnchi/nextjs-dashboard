import React from 'react'
import { twMerge } from 'tailwind-merge'

const DataCard = ({data}:{data:dataCard}) => {
    return (
        <div className={twMerge('h-[200px] border flex flex-col p-5 gap-y-10  rounded-xl',data.color)}>
            <span className=' text-2xl'>{data.title}</span>
            <span className=' text-2xl text-center'>{data.count}</span>
        </div>
    )
}

export default DataCard