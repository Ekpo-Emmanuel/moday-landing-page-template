import React from 'react'
import logo from '/public/images/logo2.svg'
import image1 from '/public/images/product1.png'
import image2 from '/public/images/product2.avif'
import image3 from '/public/images/product3.avif'
import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'


export default function Products() {
    const pricing = [
        {
            title: 'For professionals and teams managing tasks & workflows',
            image: image1,
            subtitle: 'Manage tasks, projects, and processes to fuel collaboration and efficiency at scale.',
            specs: ['Project management', 'Portfolio management', 'Resource management','Goals & strategy']
        },
        {
            title: 'For sales professionals and customer-facing teams',
            image: image2,
            subtitle: 'Track and manage all aspects of your sales cycle, customer data, and more in one place.',
            specs: ['Contact management', 'Sales pipeline', 'Post-sales management','Lead management']
        },
        {
            title: 'For product and development professionals and teams',
            image: image3,
            subtitle: 'Build agile workflows to drive impact across your product, design, and R&D teams.',
            specs: ['Roadmap planning', 'Scrum & Kanba', 'Bug tracking','Sprint dashboards']
        },
    ]
  return (
    <section className="py-10  px-5 sm:px-0 sm:py-20 mx-auto max-w-7xl" >
        <main className='flex flex-col sm:items-center gap-3 sm:gap-5'>
            <img 
                src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/monday_products_small.svg'
                alt='logo'
                className='w-40 sm:w-30 '
            />
            <p className='mt-4 sm:w-[60%] text-2xl sm:text-5xl font-bold text-gray-800 sm:text-center'>End-to-end products to run the core of your business</p>
            <p className='sm:text-center text-gray-600 text-sm sm:text-lg'>Tailored products designed for every aspect of your teams' needs.</p>
        </main>
        <main className='mt-20 md:w-[90%] lg:w-[70%] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {pricing.map((price, index) => (
                    <div key={index} className='flex flex-col gap-3 shadow-lg px-6 py-10 bg-white rounded-md hover:shadow-2xl transition cursor-default'>
                        <div className='flex flex-col gap-3'>
                            <Image src={price.image} alt='logo' width={150} height={150}/>
                            <p className='text-[12px] text-gray-600'>{price.title}</p>
                            <p className='text-[14px] mt-4 text-gray-800'>{price.subtitle}</p>
                        </div>
                        <div className='w-full h-[2px] rounded-full  bg-gray-200'></div>
                        <div className='flex flex-col gap-3 text-gray-600 text-[13px]'>
                            <p>Top use cases:</p>
                            <ul className='flex flex-col gap-1'>
                                {price.specs.map((spec, index) => (
                                    <li key={index} className='text-[13px] flex gap-2'><CircleCheck size={15}/>{spec}</li>
                                ))}
                            </ul>
                            <button className='mt-4 border border-black flex justify-center gap-2 items-center w-full px-4 text-black p-2 rounded-full'>
                                Get started
                                <ArrowRight size={15} />
                            </button>
                            <p className='flex gap-2 items-center justify-center mt-5 text-[13px]'>
                                Learn more
                                <ArrowRight size={15} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </section>
  )
}
