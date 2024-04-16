import React from 'react'
import { HeaderBlog } from '../../HeaderBlog/HeaderBlog'
import { Main } from '../../Layouts/Main/Main'


export const Home = () => {
  return (
    <>
      <HeaderBlog />
      <Main>
        <div className="w-full flex justify-center gap-10 pt-6">
          <section>
            <div className="w-60 h-60 bg-green-600"></div>
          </section>
          <section>
            <div className="w-60 h-60 bg-red-600"></div>
          </section>
        </div>
      </Main>
    </>
  )
}
