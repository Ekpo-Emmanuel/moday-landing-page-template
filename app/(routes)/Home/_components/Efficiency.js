import React from 'react'
import image1 from '/public/images/eff1.avif'
import image2 from '/public/images/eff2.avif'
import image3 from '/public/images/eff3.png'
import Image from 'next/image'

import { IoMdArrowForward } from "react-icons/io";


export default function Efficiency() {
  return (
    <section className=" bg-[#ECEFF8]">
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-3 py-10 px-5 sm:px-0 sm:py-20 mx-auto max-w-7xl'>
            <div className='flex flex-col gap-3 bg-[#ECEFF8] shadow-lg rounded-xl p-5 sm:p-10 cursor-pointer hover:shadow-2xl '>
                <Image src={image3} alt='image1' height={30} />
                <p className='font-bold text-2xl lg:text-4xl mt-5'>Explore proven ways to work more efficiently</p>
                <button className='bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 mt-4 items-center w-fit px-4 text-white p-2 rounded-full'>Get Started <IoMdArrowForward size={15} /> </button>
            </div>
            <div className='bg-white shadow-lg cursor-pointer flex flex-col sm:gap-0 gap-6 justify-between overflow-hidden rounded-xl hover:shadow-2xl'>
              <div className='flex flex-col gap-3 p-5 sm:p-10'>
                <p className='text-[14px] text-gray-500'>Simplify OKR tracking</p>
                <p className='font-bold text-5xl mt-5 text-[#5151D5]'>80%</p>
                <p className='text-md text-gray-500'>of goals achieved with OKRs on monday.com </p>
                <p className='mt-4 text-[12px] border-b border-[#5151D5] flex gap-2 items-center w-fit text-[#5151D5]'>Learn more <IoMdArrowForward /> </p>
              </div>
              <Image src={image1} alt='image1'  />
            </div>
            <div className='bg-white shadow-lg cursor-pointer flex flex-col sm:gap-0 gap-6 justify-between overflow-hidden rounded-xl hover:shadow-2xl'>
              <div className='flex flex-col gap-3 p-5 sm:p-10'>
                <p className='text-[14px] text-gray-500'>Onboard clients successfully</p>
                <p className='font-bold text-5xl mt-5 text-[#5151D5]'>74%</p>
                <p className='text-md text-gray-500'>improvement in customer retention</p>
                <p className='mt-4 text-[12px] border-b border-[#5151D5] flex gap-2 items-center w-fit text-[#5151D5]'>Learn more <IoMdArrowForward /> </p>
              </div>
              <Image src={image2} alt='image1'  />
            </div>
        </div>
    </section>
  )
}
