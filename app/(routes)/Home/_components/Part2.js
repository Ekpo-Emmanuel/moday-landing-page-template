import React from 'react'
import Image from 'next/image'
import part3Image from '/public/images/part3.jpg'
import { IoMdArrowForward } from "react-icons/io";

export default function Part2() {
  return (
    <div className='bg-white p-5 sm:p-20 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <p className='text-2xl sm:text-4xl font-bold'>The Work OS that lets you shape workflows, your way</p>
            <div className='flex flex-col gap-4'>
                <p className='text-sm sm:text-lg text-gray-600'>Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs.</p>
                <button className='mt-4 bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 items-center w-fit px-4 text-white p-2 rounded-full'>
                    Get Started
                    <IoMdArrowForward />
                </button>
            </div>
        </div>
        <div className='mx-auto p-10 mt-5'>
                <Image 
                    src={part3Image}
                    alt='part3Image'
                    // width={500}
                    // height={500}
                />
            </div>
    </div>
  )
}
