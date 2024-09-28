import { useState, useCallback } from 'react'

import { Navbar } from './components/Navbar'
import { Submenu } from './components/Submenu'

import { HeroSection } from './sections/heroSection'

import './App.css'

function App() {

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
        <HeroSection />
      </main>
    </>
  )
}

export default App
