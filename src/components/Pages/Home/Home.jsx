import React from 'react'
import { HeaderBlog } from '../../HeaderBlog/HeaderBlog'
import { Main } from '../../Layouts/Main/Main'
import m4 from '../../../assets/m4.jpg'


export const Home = () => {

  return (
    <>
      <HeaderBlog />
      <Main>
        <div className="w-full flex justify-center gap-10 pt-6">
          <section className='w-2/5 text-white '>
            {/* <div className="w-60 h-60 bg-green-600"></div> */}
            <img src={m4} alt="" />
            <div className='bg-blue-900 pl-2 pb-4 flex flex-col gap-1'>
              <p className='text-gray-500'>24 de abril de 2005</p>
              <p className=' font-medium text-2xl '>Anuncio de produccion de M4</p>
              <div className=' w-11/12'>
                <p className='text-gray-400 text-2xl'>Se anuncia la produccion de la nueva m4 Que formara parte del ejercito E.E.U.U Para la 3 guerra mundial.</p>
              </div>
            </div>
          </section>
          <section className='w-2/5'>
            <div className="w-60 h-60 bg-red-600"></div>
          </section>
        </div>
      </Main>
    </>
  )
}
