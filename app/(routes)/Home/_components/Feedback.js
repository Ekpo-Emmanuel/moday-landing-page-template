'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
  } from "@/components/ui/carousel"

import image1 from '/public/images/test1.avif'
import image1_1 from '/public/images/test1-1.svg'

import image2 from '/public/images/test2.avif'
import image2_1 from '/public/images/test2-2.webp'

import image3 from '/public/images/test3.avif'
import image3_1 from '/public/images/test3-3.webp'

import image4 from '/public/images/test4.avif'
import image4_1 from '/public/images/test4-4.webp'

import image5 from '/public/images/test5.avif'

import Image from 'next/image';



  function CarouselDApiDemo() {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
   
    const details = [
        {
            name: 'Stefana Muller',
            title: 'Senior Director, CTO Product and Program Office',
            description: 'monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.',
            image: image1,
            company: true,
        },
        {
            name: 'Stefana Muller',
            title: 'Senior Director, CTO Product and Program Office',
            description: 'monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.',
            image: image2,
            company: true,
        },
        {
            name: 'Stefana Muller',
            title: 'Senior Director, CTO Product and Program Office',
            description: 'monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.',
            image: image3,
            company: true,
        },
        {
            name: 'Stefana Muller',
            title: 'Senior Director, CTO Product and Program Office',
            description: 'monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.',
            image: image4,
            company: true,
        },
        {
            name: 'Stefana Muller',
            title: 'Senior Director, CTO Product and Program Office',
            description: 'monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.',
            image: image5,
            company: false,
        },
    ]
    return (
      <div >
        <Carousel setApi={setApi} className="w-full mx-auto max-w-xs sm:max-w-lg md:max-w-7xl">
          <CarouselContent>
          {details.map((item, index) => (
            <CarouselItem key={index}>
                <div className="flex items-center justify-center p-6 bg-[#6161FF] rounded-3xl relative cursor-default">
                <div className="">
                    {/* <img src={item.image} alt={item.name} className="w-full" /> */}
                    <div className="mt-4">
                    <p className="text-xl font-bold text-white">{item.name}</p>
                    <p className="text-[10px] text-white">{item.title}</p>
                    <p className="text-md mt-4 text-white">"{item.description}"</p>
                    {/* {item.company && <p className="absolute top-10 left-10 overflow-hidden rounded-full w-20 h-20">
                        <Image src={image5} alt={image1_1} />
                    </p>} */}
                    </div>
                </div>
                </div>
            </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-[10px] text-muted-foreground">
          {current} of {count}
        </div>
      </div>
    )
  }
  


export default function Feedback() {
  return (
    <div className='sm:px-0 sm:py-20 mx-auto max-w-7xl'>
        <div className='grid md:grid-cols-8 gap-10 p-5 sm:p-10 items-center '>
            <div className='md:col-span-3'>
                <p className='text-2xl leading-tighter sm:leading-none sm:text-5xl font-extrabold'>See how our customers drive impact</p>
                <button className='mt-4 text-blue-700 text-[12px] flex items-center border-b border-blue-700 w-fit gap-3'>Learn more <ArrowRight size={10} /> </button>
            </div>
            <div className='md:col-span-5  overflow-hidden '>
                <CarouselDApiDemo />
            </div>
        </div>
    </div>
  )
}
