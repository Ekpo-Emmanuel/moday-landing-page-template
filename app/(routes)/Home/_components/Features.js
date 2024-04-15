import React from 'react'
import f1Icon from '/public/images/f1_icon.png'
import f2Icon from '/public/images/f2.avif'
import f3Icon from '/public/images/f3_icon.avif'
import f3Image from '/public/images/f3Image.avif'
import f4Icon from '/public/images/f4_icon.png'
import f4Image from '/public/images/f4Image.avif'


import Image from 'next/image'
import { IoMdArrowForward } from "react-icons/io";
import { CircleCheck } from 'lucide-react'

export default function Features() {
    const subFeatures = [
        {
            color: '#00D2D2',
            title: 'monday sales CRM',
            subtitle: 'G2 LEADER FOR CRM SOFTWARE',
            image: f3Icon,
            banner: 'Automate your sales cycles to close more deals',
            list: ['Sales pipeline', 'Contact management', 'Mass email & tracking'],
            image1: f3Image
        },
        {
            color: '#00CA72',
            title: 'monday dev',
            subtitle: 'G2 LEADER FOR PRODUCT MANAGEMENT & BUG TRACKING SOFTWARE',
            image: f4Icon,
            banner: 'Accelerate your product lifecycle, from concept to launch',
            list: ['Sprint management', 'Roadmap planning', 'Bug tracking'],
            image1: f4Image
        }
    ]
  return (
    <div className='bg-[#F0F3FF]'>
        <section className='py-10 sm:py-20 mx-auto max-w-7xl'>
            <main>
                <p className='text-1xl sm:text-4xl w-[90%] sm:w-[70%] mx-auto text-center text-gray-800 font-bold'>Step into a world of seamless work experiences, powered by a <span className='text-[#5151D5] '>suite of products</span>  designed to flex and scale to your way of working.</p>
            </main>
            <main className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 w-[90%] lg:w-full mx-auto items-center bg-white py-5 mt-10 sm:mt-20 rounded-lg shadow-xl'>
                <div className='flex flex-col gap-6 p-5 sm:p-10 md:pl-10'>
                    <div className='flex flex-col gap-4 sm:gap-8'>
                        <div className='flex gap-3 items-start '>
                            <Image src={f1Icon} alt='f1Icon' width={40} height={40}/>
                            <div className='flex justify-between flex-col'>
                                <p className='font-bold text-[#5151D5] text-lg leading-tight'>monday work management</p>
                                <p className='text-gray-600 text-[10px] tracking-tighter'>#1 WORK MANAGEMENT SOFTWARE ON G2</p>
                            </div>
                        </div>
                        <p className='font-bold text-gray-800 text-2xl tracking-tighter sm:text-3xl'>Manage everything from strategy to tasks to exceed your goals</p>
                    </div>
                    <div className='border-t-2 border-gray-200 flex flex-col gap-4 py-4 text-gray-600'>
                        <p>Top features</p>
                        <ul className='flex flex-col gap-1'>
                            <li className='text-sm flex gap-2'><CircleCheck size={15}/>Project management</li>
                            <li className='text-sm flex gap-2'><CircleCheck size={15}/>Resource management</li>
                            <li className='text-sm flex gap-2'><CircleCheck size={15}/>Requests & approvals</li>
                            <li className='text-sm flex gap-2'><CircleCheck size={15}/>Custom workflows</li>
                        </ul>
                        <button className='bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 items-center w-fit px-4 text-white p-2 rounded-full'>
                            <Image
                                src={f1Icon}
                                alt='f1Icon'
                                height={20}
                                width={20}
                            />
                             <span className='text-[12px]'>Get Started</span>
                            <IoMdArrowForward />
                        </button>
                    </div>
                </div>
                <div className='mx-auto p-4 sm:p-10 md:p-0'>
                    <Image
                        src={f2Icon}
                        alt='f1Icon'
                        height={420}
                        width={720}
                    />
                </div>
            </main>

            <section className='flex flex-col md:flex md:flex-row sm:gap-10 justify-center'>
                {subFeatures.map((feature, index) => (
                    <main key={index} className='grid grid-cols-1 gap-10 items-center w-[90%] lg:w-full mx-auto bg-white py-5 mt-10 sm:mt-20 rounded-lg shadow-xl'>
                        <div className='flex flex-col gap-6 p-5 sm:p-10 md:pl-10'>
                            <div className='flex flex-col gap-4 sm:gap-8'>
                                <div className='flex gap-3 items-start '>
                                    <Image src={feature.image} alt={feature.title} width={40} height={40}/>
                                    <div className='flex justify-between flex-col'>
                                        <p className='font-bold text-[#5151D5] text-lg leading-tight'>{feature.title}</p>
                                        <p className='text-gray-600 text-[10px] tracking-tighter'>{feature.subtitle}</p>
                                    </div>
                                </div>
                                <p className='font-bold text-gray-800 text-2xl tracking-tighter sm:text-3xl'>{feature.banner}</p>
                            </div>
                            <div className='border-t-2 border-gray-200 flex flex-col gap-4 py-4 text-gray-600'>
                                <ul className='flex flex-col sm:flex-row gap-2'>
                                    {feature.list.map((list, index) => (
                                        <li key={index} className='text-[12px] flex gap-2'><CircleCheck size={15}/>{list}</li>
                                    ))}
                                </ul>
                                <button className='bg-[#6B6CFF] hover:bg-[#5151D5] flex gap-2 items-center w-fit px-4 text-white p-2 rounded-full'>
                                    <Image
                                        src={f1Icon}
                                        alt='f1Icon'
                                        height={20}
                                        width={20}
                                    />
                                    <span className='text-[12px]'>Get Started</span>
                                    <IoMdArrowForward />
                                </button>
                            </div>
                        </div>
                        <div className='mx-auto p-4 sm:p-10 md:p-0'>
                            <Image
                                src={feature.image1}
                                alt='f1Icon'
                            />
                        </div>
                    </main>
                ))}
            </section>
        </section>
    </div>
  )
}
