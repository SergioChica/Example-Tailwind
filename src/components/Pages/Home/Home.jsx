import React, { useState } from 'react'
import { HeaderBlog } from '../../HeaderBlog/HeaderBlog'
import { Main } from '../../Layouts/Main/Main'
import { FirstNew } from '../../FirstNew/FirstNew'
import { object,slice } from '../../Object/Object'
import { AllNews } from '../../AllNews/AllNews'

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from 'react-icons/rx'

export const Home = () => {

  const [viewImg, setViewImg] = useState(0);

  const prevSlide = () => {
    const firstSlide = viewImg === 1;
    const newImg = firstSlide ? object.length - 1 : viewImg - 1;
    setViewImg(newImg);
  }

  const nextSlide = () => {
    const lastSlide = viewImg === object.length - 1;
    const newImg = lastSlide ? 0 : viewImg + 1;
    setViewImg(newImg);
  }

  const goToSlide = (numberImg) => {
      setViewImg(numberImg);
  }

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
            )).splice(1, 3)}
          </section>
        </div>
        <div className='w-full h-full flex justify-center'>
          <div className='w-[800px] h-[400px] relative group'>
            <div className='w-[800px] h-[400px]'>
              <div style={{
                backgroundImage: `url(${slice[viewImg].img})`
              }} className=' w-full h-full rounded-[26px] bg-center bg-cover duration-500'></div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer '>
              <MdArrowBackIos onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer  '>
              <MdArrowForwardIos onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4  justify-center py-2 '>
              {slice.map((img, numberImg) => (
                <div key={numberImg} onClick={() => goToSlide(numberImg)} className=' text-[18px] cursor-pointer'>
                  <RxDotFilled color='white' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
