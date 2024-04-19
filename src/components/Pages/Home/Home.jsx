import React from 'react'
import { HeaderBlog } from '../../HeaderBlog/HeaderBlog'
import { Main } from '../../Layouts/Main/Main'
import { FirstNew } from '../../FirstNew/FirstNew'
import { object } from '../../Object/Object'
import { AllNews } from '../../AllNews/AllNews'

export const Home = () => {

  return (
    <>
      <HeaderBlog />
      <Main>
        <div className="w-full flex justify-center gap-10 pt-6">
          <section className='w-2/5 text-white '>
            {/* <div className="w-60 h-60 bg-green-600"></div> */}
            {object.filter(newNotice => newNotice.id === 1).map(newNotice => (
              <FirstNew
                key={newNotice.id}
                id={newNotice.id}
                img={newNotice.img}
                date={newNotice.date}
                title={newNotice.title}
                description={newNotice.description}
              />
            ))}
          </section>
          <section className='w-2/4 flex flex-col gap-5'>
            {object.map(newNotice => (
              <AllNews
                key={newNotice.id}
                id={newNotice.id}
                img={newNotice.img}
                date={newNotice.date}
                description={newNotice.description}
              />
            )).splice(1, 4)}
          </section>
        </div>
      </Main>
    </>
  )
}
