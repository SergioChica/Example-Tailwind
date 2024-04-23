import React from 'react'

export const AllNews = ({img,date,description}) => {
    return (
        <>
            <div className=' h-full max-h-36 flex gap-3'>
              <div className='w-56 h-full'>
                <img src={img} alt="" className='w-full h-full object-fill' />
              </div>
              <div className=' flex flex-col gap-1 h-full pl-3 border-b-2 w-full'>
                <p className='text-gray-500'>{date}</p>
                <div className='w-full h-24 overflow-y-auto overflow-x-hidden pr-3'>
                  <p className='text-white text-base break-words '>{description}</p>
                </div>
              </div>
            </div>
        </>
    )
}
