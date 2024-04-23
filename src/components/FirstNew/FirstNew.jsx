import React from 'react'

export const FirstNew = ({ img, date, title, description }) => {
    return (
        <>
            <div className=' h-96 w-full'>
                <img src={img} alt="" className=' w-full h-full object-fill' />
            </div>
            <div className='bg-blue-900 pl-2 pb-4 flex flex-col gap-1'>
                <p className='text-gray-500'>{date}</p>
                <p className=' font-medium text-xl '>{title}</p>
                <div className='w-11/12 max-h-24 overflow-y-auto overflow-x-hidden'>
                    <p className='text-gray-400 text-base break-words'>{description} </p>
                </div>
            </div>
        </>
    )
}
