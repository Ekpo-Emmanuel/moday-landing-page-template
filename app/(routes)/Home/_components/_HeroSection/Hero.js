import React from 'react'
import HeroTab from './HeroTab'
import HeroTitle from './HeroTitle'

export default function Hero() {
  return (
    <div className=' py-40 pb-0 sm:py-40 sm:pb-40'>
        <HeroTitle />
        <HeroTab />
    </div>
  )
}
