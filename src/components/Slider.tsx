"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "../../public/slide1.png"

const Slider = () => {

    const data = [
        {
          id: 1,
          title: "always fresh & always crispy & always hot",
          image: "/slide1.png",
        },
        {
          id: 2,
          title: "we deliver your order wherever you are in NY",
          image: "/slide2.png",
        },
        {
          id: 3,
          title: "the best pizza to share with your family",
          image: "/slide3.jpg",
        },
      ];
    const [slide,setSlide] = useState (2 )
    useEffect (()=>{
        const interval = setInterval(
            ()=>
            setSlide((prev) => (prev === data.length - 1 ? 0 :prev  + 1)),
            2000
        );
        return () => clearInterval (interval)
    },[]);
    
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      {/* TEXT CONTAINER */}
      <div className=' h-1/2 flex flex-col items-center justify-center text-red-500 font-bold gap-8'>
        <h1 className='text-5xl p-4 text-center md:text-6xl lg:text-7xl'>
            {data[slide].title}
            </h1>
        <button className='bg-red-500 text-white px-8 py-4'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full h-1/2 relative'>
        <Image src={data[slide].image} alt='' fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider
