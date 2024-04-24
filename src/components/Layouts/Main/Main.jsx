import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='min-h-full h-auto flex flex-col gap-[30px] bg-neutral-950 pb-[40px] '>
      {children}
    </main>
  )
}