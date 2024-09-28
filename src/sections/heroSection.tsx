import { useState, useCallback } from 'react'

import backgroundWebp from '../assets/background.webp'
import personWebp from '../assets/person.webp'

export function HeroSection() {

  return (
    <>
      <div className='w-[100%] h-[100%] bg-white backdrop-blur-md opacity-80 z-[2]'>
        <img className="absolute w-[100%] h-[100%] origin-[50%_100%_0px] object-bottom object-cover z-[-1]" width="1440" height="800" src={backgroundWebp} />
      </div>
      <img className="absolute bottom-0 z-0" src={personWebp} ></img>
      <div className='absolute flex h-[100%] ml-[12.5vw] items-center top-0'>
        <h1 className='text-white uppercase text-[150px] font-[Aeonik-Capitalized-Black] tracking-tighter leading-[1] w-[75%]'>Change the way you money</h1>
      </div>
    </>
  )
}
