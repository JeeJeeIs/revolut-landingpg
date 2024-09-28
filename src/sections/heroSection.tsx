import { useState, useCallback } from 'react'

import { Navbar } from '../components/Navbar'
import { Submenu } from '../components/Submenu'

import backgroundWebp from '../assets/background.webp'
import personWebp from '../assets/person.webp'

export function HeroSection() {
  const [SubmenuActive, setSubmenuActive] = useState(false);

  const changeSubmenuActive = useCallback((data: boolean) => {
      setSubmenuActive(data)
  }, [SubmenuActive])

  return (
    <>
    <header className='absolute z-1 w-[100%] h-[100%]'>
        <Navbar changeSubmenuActive={changeSubmenuActive} SubmenuActive={SubmenuActive} />
        <Submenu SubmenuActive={SubmenuActive} changeSubmenuActive={changeSubmenuActive} />
    </header>
    <main className='absolute h-[100vh] w-[100vw] z-[-1]'>
      <div className='w-[100%] h-[100%] bg-white backdrop-blur-md opacity-80 z-[2]'>
        <img className="absolute w-[100%] h-[100%] origin-[50%_100%_0px] object-bottom object-cover z-[-1]" width="1440" height="800" src={backgroundWebp}/>
      </div>
      <img className="absolute bottom-0" src={personWebp}></img>
    </main>
    </>
  )
}
