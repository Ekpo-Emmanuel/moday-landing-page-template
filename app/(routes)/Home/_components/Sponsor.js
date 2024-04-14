import React from 'react'
import Image from 'next/image'
import sp1 from '/public/images/sp1.avif'
import sp2 from '/public/images/sp2.png'
import sp3 from '/public/images/sp3.png'
import sp4 from '/public/images/sp4.png'
import sp5 from '/public/images/sp5.avif'
import sp6 from '/public/images/sp6.png'
import sp7 from '/public/images/sp7.png'
import sp8 from '/public/images/sp8.png'
import sp10 from '/public/images/sp10.png'



export default function Sponsor() {
    const sponsors = [
        { id: 'sp1', image: sp1 },
        { id: 'sp2', image: sp2 },
        { id: 'sp3', image: sp3 },
        { id: 'sp4', image: sp4 },
        { id: 'sp5', image: sp5 },
        { id: 'sp6', image: sp6 },
        { id: 'sp7', image: sp7 },
        { id: 'sp8', image: sp8 },
        { id: 'sp10', image: sp10 },
    ]
  return (
    <div className='flex justify-evenly items-center gap-5 px-8 mx-auto py-10 sm:py-20 max-w-7xl flex-wrap'>
        {sponsors.map((sponsor) => (
            <div key={sponsor.id}>
                <Image 
                    src={sponsor.image}
                    alt='sponsors'
                    width={70}
                    height={70}
                />
            </div>
        ))}
    </div>
  )
}
