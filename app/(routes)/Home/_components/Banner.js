import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


export default function Banner() {
  return (
    <div className='bg-[#181B34] mt-10'>
        <div className='flex flex-col gap-5 sm:items-center justify-center py-10 px-5 sm:px-0 sm:py-20 mx-auto max-w-7xl'>
            <p className='text-white text-2xl sm:text-4xl leading-tight'>Deliver your best work <span className='font-bold '>with monday.com</span></p>
            <p className='text-white text-sm sm:text-lg'>No credit card needed   ✦   Unlimited time on Free plan</p>
            <button className='bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 items-center w-fit mt-4 px-4 text-white p-2 rounded-full'>
                Get Started
                <IoMdArrowForward size={15} />
            </button>
        </div>
    </div>
  )
}
