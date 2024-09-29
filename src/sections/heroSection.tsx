import { useState, useCallback } from 'react'
import { Button } from '../components/NavButton';

import backgroundWebp from '../assets/background.webp'
import personWebp from '../assets/person.webp'

export function HeroSection() {

  return (
    <>
      <div className='w-[100%] h-[100%] bg-white backdrop-blur-md opacity-80 z-[2]'>
        <img className="absolute w-[100%] h-[100%] origin-[50%_100%_0px] object-bottom object-cover z-[-1]" width="1440" height="800" src={backgroundWebp} />
      </div>
      <img className="absolute bottom-0 z-0 test" src={personWebp} ></img>
      <div className='absolute flex flex-col h-[100%] top-0 gap-10'>
        <h1 className='ml-[12.5vw] mt-[20vh] text-white uppercase lg:text-[150px] md:text-[120px] text-[40px] font-[Aeonik-Capitalized-Black] tracking-tighter leading-[1] md:w-[75%] w-[80%]'>Change the way you money</h1>
        <h1 className='ml-[12.5vw] text-white text-[20px] font-[Aeonik-Regular] tracking-tighter leading-[1] lg:w-[25%] md:w-[35%] w-[80%]'>For those who want more from their money — there’s Revolut. Sign up for free, in a tap.</h1>
        <Button name={"Get the app"} styleSecond={true} SubmenuActive={true} className={"ml-[12.5vw]"} />
      </div>
    </>
  )
}
