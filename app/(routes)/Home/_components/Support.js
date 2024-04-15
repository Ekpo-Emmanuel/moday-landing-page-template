import React from 'react'
import Image from 'next/image'
import image1 from '/public/images/support1.avif'
import image2 from '/public/images/support2.png'
import image3 from '/public/images/support3.png'
import image4 from '/public/images/support4.png'
import { IoMdArrowForward } from "react-icons/io";


export default function Support() {
  return (
    <div className='bg-white p-5 pt-10  sm:p-10 mx-auto max-w-7xl'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <div>
                <Image 
                    src={image1}
                    alt='support image'
                    height={400}

                />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-10'>
                <p className='font-bold text-2xl lg:text-4xl mt-5'>Explore proven ways to work more efficiently</p>
                <p className='text-md text-gray-500'>Our support superheroes are a click away to help you get the most out of monday.com, so you can focus on working without limits.</p>
                <div className='flex flex-col sm:flex-row justify-between gap-10'>
                    <div className='flex gap-2 items-start'>
                        <Image src={image2} height={30} />
                        <div className='flex flex-col gap-1'>
                            <p className='text-2xl font-bold'>24/7</p>
                            <p className='text-sm text-gray-500'>support anytime, anywhere</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Image src={image3} height={30} />
                        <div className='flex flex-col gap-1'>
                            <p className='text-2xl font-bold'>Voted #1</p>
                            <p className='text-sm text-gray-500'>Most Loved by customers on G2</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Image src={image4} height={30} />
                        <div className='flex flex-col gap-1'>
                            <p className='text-2xl font-bold'>2 hour</p>
                            <p className='text-sm text-gray-500'>saverage response time</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
                    <button className='bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 mt-4 items-center w-fit px-4 text-white p-2 rounded-full'>Get Started <IoMdArrowForward size={15} /> </button>
                    <button className=' text-blue-700 text-[12px] flex items-center border-b border-blue-700 w-fit gap-3'>Visit our support center <IoMdArrowForward size={10} /> </button>
                </div>
            </div>
        </div>
    </div>
  )
}
