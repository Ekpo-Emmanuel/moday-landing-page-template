import React from 'react'
import Image from 'next/image'
import face1 from '/public/images/face1.avif'
import face2 from '/public/images/part4-2.avif'
import face3 from '/public/images/face3.avif'
import f4Image from '/public/images/f4Image.avif'


import { IoMdArrowForward } from "react-icons/io";


export default function Part4() {
  return (
    <section className="overflow-y-auto bg-[#181B34] lg:h-svh">
        <div className=" p-5 lg:py-32 mx-auto lg:px-12 max-w-7xl lg:flex">
            <div className=" lg:w-1/2">
                <div className="flex-shrink-0">
                    <div>
                    <ul
                        className="grid grid-cols-1 gap-6 md:gap-20 lg:gap-24 mt-6 text-base font-medium text-gray-500 list-none lg:mt-0"
                        role="list"
                    >
                        <li>
                            <div>
                                <p className="mt-5 text-white font-bold text-2xl sm:text-3xl sm:text-4xl">Streamline your work for maximum productivity</p>
                            </div>
                            <div className="mt-4 text-gray-400 text-sm sm:text-lg">
                            Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center rounded-lg pt-5 sm:p-4">
                                <Image 
                                    src={face1}
                                    alt="face1"
                                    className="w-10 sm:w-16 h-10 sm:h-16 rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                    <p className='text-[13px]'>"We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless"</p>
                                    <span className='font-bold text-white'>Jane Tham | VP of Collaboration Technologies</span>
                                    <span className='text-[11px]'>Universal Music Group</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="mt-5 text-white font-bold text-2xl sm:text-3xl sm:text-4xl">Bring teams together to drive business impact</p>
                            </div>
                            <div className="mt-4 text-gray-400 text-sm sm:text-lg">
                            Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center rounded-lg pt-5 sm:p-4">
                                <Image 
                                    src={face2}
                                    alt="face1"
                                    className="w-10 sm:w-16 h-10 sm:h-16 rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                    <p className='text-[13px]'>"Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration."</p>
                                    <span className='font-bold text-white'>JSarah Pharr | AVP Marketing</span>
                                    <span className='text-[11px]'>Genpact</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="mt-5 text-white font-bold text-2xl sm:text-3xl sm:text-4xl">Stay on track to reach your goals, faster</p>
                            </div>
                            <div className="mt-4 text-gray-400 text-sm sm:text-lg">
                            Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.
                            </div>
                            <button className="mt-5 rounded-full px-5 py-2.5 text-sm text-white border border-white flex items-center justify-center gap-2">
                                Get Started
                                <IoMdArrowForward />
                            </button>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center rounded-lg pt-5 sm:p-4">
                                <Image 
                                    src={face3}
                                    alt="face3"
                                    className="w-10 sm:w-16 h-10 sm:h-16 rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                                    <p className='text-[13px]'>"monday.com allows banks to be synchronized between the top-level management figures and local KPIs"</p>
                                    <span className='font-bold text-white'>Baptiste Ancey | Head of Innovation</span>
                                    <span className='text-[11px]'>Indosuez Wealth Management</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="top-0  pt-8 pb-16 lg:sticky ">
                    <div className='pl-0lg:pl-20'>
                    <div className=" lg:py-20 lg:pl-0 ">
                        <div>
                            <Image 
                                src={f4Image}
                                alt="f4Image"

                            />
                        {/* <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                            <button
                            className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            aria-label="Primary action"
                            >
                            Primary button
                            </button>
                            <button
                            className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            aria-label="Secondary action"
                            >
                            Secondary button
                            </button>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
