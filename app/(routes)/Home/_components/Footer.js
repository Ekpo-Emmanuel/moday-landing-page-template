import React from 'react'

import logo from '/public/images/logo.png'
import Image from 'next/image'

const Footer2 = () => {
    return (
        <div className="flex flex-col pt-12 mt-12 border-t md:flex-row md:items-center md:justify-between">
        <span className="text-sm font-medium text-gray-500 text-balance">
          Beautifully designed HTML, Astro.js and Tailwind themes! Save months of
          time and build your startup landing page in minutes.
        </span>
        <form className="w-full max-w-sm ml-auto">
          <div className="flex flex-col w-full gap-2 lg:flex-row">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              name="email"
              id="email-address"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              aria-describedby="emailHelp"
              required=""
              className="block w-full h-12 px-4 py-2 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            />
            <span id="emailHelp" className="sr-only">
              Please enter your email address to subscribe.
            </span>
            <button
              type="submit"
              aria-label="Primary action"
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    )
}
export default function Footer() {
  return (
    <footer>
  <div className="p-5 py-10  mx-auto max-w-7xl">
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-12 text-sm font-medium ">
        <div>
            <Image 
                src={logo} 
                width={130} 
                height={130} 
                alt="Monday Logo" 
            />
            <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
                <li>Pricing</li>
                <li>Contact us</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>SMB</li>
                <li>Enterprise</li>
                <li>Nonprofits</li>
                <li>App marketplace</li>
                <li>24/7 support</li>
            </ul>
        </div>
        <div>
          <h3 className="text-[14px] text-gray-700">Features</h3>
          <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
            <li>Docs</li>
            <li>Integrations</li>
            <li>Automations</li>
            <li>Files</li>
            <li>Dashboards</li>
            <li>Kanban</li>
            <li>Gantt</li>
        </ul>
        </div>
        <div>
        <h3 className="text-[14px] text-gray-700">Monday products</h3>
          <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
            <li>Monday work management</li>
            <li>monday sales CRM</li>
            <li>monday dev</li>
        </ul>
        <h3 className="mt-6 text-[14px] text-gray-700">More by Monday.com</h3>
          <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
            <li>WorkCanvas</li>
            <li>WorkForms</li>
        </ul>
        </div>
        <div className="mt-12 md:mt-0">
            <h3 className="text-[14px] text-gray-700">Use Cases</h3>
            <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
                <li>Marketing</li>
                <li>Project managemnent</li>
                <li>sales</li>
                <li>Developers</li>
                <li>HR</li>
                <li>IT</li>
                <li>Operation</li>
                <li>Construction</li>
            </ul>
        </div>
        <div className="mt-12 md:mt-0">
            <h3 className="text-[14px] text-gray-700">Company</h3>
            <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
                <li>About us</li>
                <li>Careers - we're hiring!</li>
                <li>monday-U</li>
                <li>press</li>
                <li>Customer Stories</li>
                <li>Become a partner</li>
                <li>Sustainability & ESG</li>
                <li>Affiliates</li>
                <li>Digital Lift</li>
                <li>Emergency Response</li>
                <li>Investor relations</li>
            </ul>
        </div>
        <div className="mt-12 md:mt-0">
            <h3 className="text-[14px] text-gray-700">Resources</h3>
            <ul className='flex flex-col gap-2 mt-4 text-[12px] text-gray-500'>
                <li>Help Center</li>
                <li>Community</li>
                <li>Blog</li>
                <li>What's new</li>
                <li>Academy</li>
                <li>Global events</li>
                <li>monday spaces</li>
                <li>Startup for startup</li>
                <li>App development</li>
                <li>Find a partner</li>
                <li>Hire an expert</li>
                <li>Compare</li>
            </ul>
        </div>
      </div>
    </div>
    {/* <Footer2 /> */}
  </div>
</footer>

  )
}
