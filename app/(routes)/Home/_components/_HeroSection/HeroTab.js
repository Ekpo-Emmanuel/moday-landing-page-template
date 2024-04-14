'use client'

import React, {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { EarthLock, BadgeDollarSign, Shell, ArrowRight } from 'lucide-react';
import s1_1 from '/public/images/s1-1.png';
import s1_2 from '/public/images/s1-2.png';
import s1_3 from '/public/images/s1-3.png';
import s1_4 from '/public/images/s1-4.png';
import s1_5 from '/public/images/s1-5.png';
import s1_6 from '/public/images/s1-6.png';
import s1_7 from '/public/images/s1-7.png';
import s1_8 from '/public/images/s1-8.png';

import { Checkbox } from "@/components/ui/checkbox"



export default function HeroTab() {
    const tabs = [
        { 
            id: 'tab1', 
            name: {
                icon: EarthLock,
                iconColor:'blue-500',
                title: 'Work Management',
                subtitle: 'Run all aspects of work'
            }, 
            content: [
                { image: s1_1, title: 'Creative & Design', color: 'red-300' },
                { image: s1_2, title: 'Operations', color: 'blue-500' },
                { image: s1_3, title: 'Marketting', color: 'blue-500' }, 
                { image: s1_4, title: 'Project Management', color: 'blue-500' }, 
                { image: s1_5, title: 'Task Management', color: 'blue-500' }, 
                { image: s1_6, title: 'HR', color: 'blue-500' }, 
                { image: s1_7, title: 'IT', color: 'blue-500' }, 
                { image: s1_8, title: 'More Workflows', color: 'blue-500' }, 
            ]
        },
        { 
            id: 'tab2', 
            name: {
                icon: BadgeDollarSign,
                iconColor:'blue-500',
                title: 'Sales CRM',
                subtitle: 'Streamline sales processes'
            }, 
            content: [
                { image: s1_1, title: 'Sales Pipeline', color: 'red-300' },
                { image: s1_2, title: 'Contact Management', color: 'blue-500' },
                { image: s1_3, title: 'Lead Management', color: 'blue-500' }, 
                { image: s1_4, title: 'Lead capturing', color: 'blue-500' }, 
                { image: s1_5, title: 'Customer Projects', color: 'blue-500' }, 
                { image: s1_6, title: 'Marketting Activities', color: 'blue-500' }, 
                { image: s1_7, title: 'Customer onboarding', color: 'blue-500' }, 
                { image: s1_8, title: 'Other', color: 'blue-500' }, 
            ] 
        },
        { 
            id: 'tab3', 
            name: {
                icon: Shell,
                iconColor:'green-500',
                title: 'Dev',
                subtitle: 'Manage product lifecycles'
            }, 
             content: [
                { image: s1_1, title: 'Creative & Design', color: 'red-300' },
                { image: s1_2, title: 'Operations', color: 'blue-500' },
                { image: s1_3, title: 'Marketting', color: 'blue-500' }, 
                { image: s1_4, title: 'Project Management', color: 'blue-500' }, 
                { image: s1_5, title: 'Task Management', color: 'blue-500' }, 
                { image: s1_6, title: 'HR', color: 'blue-500' }, 
                { image: s1_7, title: 'IT', color: 'blue-500' }, 
                { image: s1_8, title: 'More Workflows', color: 'blue-500' }, 
            ]
        },
      ];
    
      const [activeTab, setActiveTab] = useState(tabs[0].id);
    
      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
  return (
    <>
    <section className="mt-6 overflow-x-auto">
      <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="justify-center w-full lg:mx-auto">
          <div className=''>
            <ul className="hidden sm:flex lg:grid md:flex justify-between lg:grid-cols-3 lg:mx-auto text-sm text-center text-black lg:border-b border-none lg:w-fit">
              {tabs.map(tab => (
                <li key={tab.id} className="w-full">
                  <div
                    className={`md:flex md:items-center md:gap-2 lg:gap-3 py-2 cursor-pointer lg:border-b-2  px-2 lg:px-6 w-fit border-transaprent ${activeTab === tab.id ? ' border-gray-400' : ''}`} 
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div className={`w-fit p-2 lg:p-3 rounded-md border transition  ${activeTab === tab.id ? `bg-${tab.name.iconColor} border-${tab.name.iconColor}` : 'bg-white'}`}>
                        <tab.name.icon 
                            size={25} 
                            strokeWidth={1.6} 
                            color={activeTab === tab.id ? 'white' : 'black'} 
                        />
                    </div>
                    <div className='text-left flex flex-col'>
                        <p className='font-bold text-md text-gray-900'>{tab.name.title}</p>
                        <span className='text-gray-500 text-[13px] text-balance'>{tab.name.subtitle}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="py-4 text-left bg-white content hidden lg:block">
              {tabs.map(tab => (
                <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
                    <div>
                        <ul className="gap-4 justify-evenly grid grid-cols-8">
                          {
                            tab.content.map((content, index) => (
                                <li key={index}>
                                    <div 
                                        className={`flex flex-col gap-2 h-full items-center justify-center cursor-pointer border border-gray-300 rounded-md p-4  transition hover:text-gray-700 hover:border-${content.color}`}
                                    >
                                    {/* <div className='w-full b-red-300'>
                                        <Checkbox />
                                    </div> */}
                                    <Image
                                            src={content.image}
                                            alt={content.title}
                                            width={30}
                                            height={20}
                                        />
                                        <p className='text-balance text-center text-gray-500 text-sm hover:text-gray-700'>{content.title}</p>
                                    </div>
                                </li>
                            ))
                          }
                        </ul>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
      <div className='mt-0 sm:mt-4 px-8 flex flex-col gap-2 sm:items-center sm:justify-center'>
        <button className='w-fit text-white bg-[#5151D5] rounded-full px-[25px] py-2 sm:py-3 text-md text-light hover:text-white transition flex items-center justify-center gap-4'>
            Get Started
            <ArrowRight size={20} />
        </button>
        <p className='text-[10px] sm:text-[12px] text-gray-500 cursor-default'>No credit card needed   ✦   Unlimited time on Free plan</p>
      </div>
    </section>
    </>
  )
}
