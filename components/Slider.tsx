"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import Autoplay from 'swiper'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import Image from 'next/image';

// import required modules


export default function App() {
  const url = "/assets/crane.jpg"
  const imgs = [
    {
      label: "page",
      image: url,
    },
    {
      label: "page2",
      image: url,
    },
    {
      label: "page3",
      image: url,
    },
    {
      label: "page4",
      image: url,
    },
    {
      label: "page5",
      image: url,
    },
    {
      label: "page6",
      image: url,
    },
    {
      label: "page7",
      image: url,
    },
    {
      label: "page8",
      image: url,
    },
    {
      label: "page9",
      image: url,
    },
  ]

  const [active, setActive] = useState(-1)
  return (
    <>
    
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        onSlideChange={(curr) => setActive(curr.realIndex)}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={800}

        navigation={true}
        modules={[Pagination, Navigation,]}
        className="mySwiper flex justify-center items-center transition duration-500 delay-100 "
      >
        {
          imgs.map((img: any, i) => (
            <div className='!rounded-3xl'>
              <SwiperSlide key={img.label} className={`${active === i ? " text-teal-800 !scale-110 p-2 md:mt-10 mt-10 transition duration-500 delay-100 md:!h-64 !h-52 ease-in " : " text-teal-800 blur-[2px] !scale-75 p-2 md:!h-64  !h-52 mt-10 transition-all duration-500 delay-100 ease-in"} bg-white rounded-lg shadow-md`}>
                <Image
                  src={img.image}
                  alt='img'
                  fill
                  className='object-cover rounded-lg -z-10'
                />
                <p className='z-10'>
                  {img.label}
                </p>

              </SwiperSlide>
            </div>
          ))
        }

      </Swiper>
    </>
  );
}