'use client'

import React, {useState} from 'react'
import Image from 'next/image';
import HeroTab from './_HeroSection/HeroTab'
import { Columns2, Columns3, BarChart4, Plug2, Bot, Puzzle, StickyNote } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import image1 from '/public/images/tab2-1.jpg';
import image2 from '/public/images/tab2-2.jpg';
import image3 from '/public/images/tab2-3.jpg';
import image4 from '/public/images/tab2-4.jpg';
import image5 from '/public/images/tab2-5.jpg';
import image6 from '/public/images/tab2-6.jpg';
import image7 from '/public/images/tab2-7.jpg';


export default function Part5() {
    const tabs = [
        { 
            id: 'tab1', 
            icon: Columns2,
            title: 'Boards',
            image: image1,
            subtitle: 'Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.',
            learnMore: false
        },
        { 
            id: 'tab2', 
            icon: Columns3,
            title: 'Views',
            image: image2,
            subtitle: 'Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.',
            learnMore: false
        },
        { 
            id: 'tab3', 
            icon: BarChart4,
            title: 'Dashboards',
            image: image3,
            subtitle: 'Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.',
            learnMore: true
        },
        { 
            id: 'tab4', 
            icon: Plug2,
            title: 'Integrations',
            image: image4,
            subtitle: 'Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.',
            learnMore: true
        },
        { 
            id: 'tab5', 
            icon: Bot,
            title: 'Automations',
            image: image5,
            subtitle: 'Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.',
            learnMore: true
        },
        { 
            id: 'tab6', 
            icon: Puzzle,
            title: 'Apps',
            image: image6,
            subtitle: 'Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.',
            learnMore: true
        },
        { 
            id: 'tab7', 
            icon: StickyNote,
            title: 'Apps',
            image: image7,
            subtitle: 'Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.',
            learnMore: true
        },
      ];

      const [activeTab, setActiveTab] = useState(tabs[0].id);
    
      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
  return (
    <div className='bg-white p-5 pt-10  sm:p-20 mx-auto max-w-7xl'>
        <section className="sm:text-center text-gray-700">
            <p className='text-2xl leading-tighter sm:leading-none sm:text-4xl font-bold'>Everything you need for any workflow</p>
            <p className='text-[12px] sm:text-sm text-gray-500 mt-1 sm:mt-3'>Easily build your ideal workflow with monday.com building blocks.</p>
        </section>
        <secton>
        <div className="mt-10 sm:mt-20 mx-auto flex flex-col items-center justify-center gap-10">
          <ul className="grid md:flex gap-2 justify-between grid-cols-7 shadow sm:shadow-2xl rounded-md">
              {tabs.map(tab => (
                <li key={tab.id} className={`${activeTab === tab.id ? 'border-b-2 sm:border-b-4 border-blue-500 rounded-sm' : ''}`}>
                  <div
                    className={`py-2 sm:px-5 sm:py-5 flex flex-col items-center gap-2 text-gray-700 cursor-pointer ${activeTab === tab.id ? ' sm:border-gray-400' : ''}`} 
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div className={`w-fit transition opacity-80 sm:block hidden`}>
                        <tab.icon 
                            size={15} 
                            strokeWidth={1.4} 
                            color={activeTab === tab.id ? 'blue' : 'black'} 
                        />
                    </div>
                    <p className={`text-[8px] sm:text-[11px] leading-tighter ${activeTab === tab.id ? 'text-blue-700' : ''}`}>{tab.title}</p>
                  </div>
                </li>
              ))}
            </ul>
            {tabs.map(tab => (
                <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10  sm:mt-10 items-center'>
                        <div>
                            <Image 
                                src={tab.image}
                                alt={tab.title}
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 text-blue-700'>
                                <tab.icon size={30} strokeWidth={1} />
                                <p className='text-2xl'>{tab.title}</p>
                            </div>
                            <p className='text-gray-500 text-[12px] sm:text-md'>{tab.subtitle}</p>
                            {tab.learnMore && <button className='mt-4 text-blue-700 text-[12px] flex items-center border-b border-blue-700 w-fit gap-3'>Learn more <ArrowRight size={10} /> </button>}
                        </div>
                    </div>
                </div>
              ))}
        </div>
        </secton>
    </div>
  )
}
