import RevolutLogo from '../assets/revolutLogo';
import { Button } from './NavButton';

type navbarItemsProps = {
    title: string;
    href: string;
    SubmenuActive: boolean
    changeSubmenuActive: (data: boolean) => void
}

type navbarProps = {
    SubmenuActive: boolean
    changeSubmenuActive: (data: boolean) => void
}

const NavbarItems = ({ title, href, changeSubmenuActive, SubmenuActive }: navbarItemsProps) => {
    return (
        <a onMouseEnter={() => changeSubmenuActive(true)} className={` ${SubmenuActive ? "text-black hover:bg-gray-300" : "text-white"} rounded-full flex items-center justify-center h-[50px] w-[130px] text-[1.25rem] font-Aeonik transition-all hover:opacity-50`} href={href}>{title}</a>  
    )
}

export function Navbar({ changeSubmenuActive, SubmenuActive }: navbarProps) {
    return (
        <div className={` ${SubmenuActive ? "bg-white" : "bg-transparent"} flex justify-around flex-row w-[100%] items-center pt-2 h-[10%] `}>
            <div className="flex flex-row items-center">
                <a className="w-[150px]" onMouseEnter={() => changeSubmenuActive(false)} href=""><RevolutLogo height={"40"} width={"125"} color={SubmenuActive ? "black" : "white"} /></a>
                <div onMouseEnter={() => changeSubmenuActive(true)} onMouseLeave={() => changeSubmenuActive(false)} className='hidden gap-1 lg:flex'>
                    <NavbarItems changeSubmenuActive={changeSubmenuActive} SubmenuActive={SubmenuActive} title={"Personal"} href={""} />
                    <NavbarItems changeSubmenuActive={changeSubmenuActive} SubmenuActive={SubmenuActive} title={"Business"} href={""} />
                    <NavbarItems changeSubmenuActive={changeSubmenuActive} SubmenuActive={SubmenuActive} title={"Revolut <18"} href={""} />
                    <NavbarItems changeSubmenuActive={changeSubmenuActive} SubmenuActive={SubmenuActive} title={"Company"} href={""}/> 
                </div> 
            </div>
            <div onMouseEnter={() => changeSubmenuActive(false)} className='hidden gap-6 md:flex'>
                <Button name={"Log in"} styleSecond={false} SubmenuActive={SubmenuActive} className={""} />
                <Button name={"Sign Up"} styleSecond={true} SubmenuActive={SubmenuActive} className={""}/>
            </div>
        </div>
    )
}