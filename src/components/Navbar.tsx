import RevolutLogo from '../assets/revolutLogo';
import { Button } from './Button';

export function Navbar() {
    return (
        <div className='flex justify-around flex-row w-[100%] items-center gap-18 mt-[20px]'>
            <div className="flex flex-row gap-12 items-center">
                <a href=""><RevolutLogo height={"40"} width={"125"} /></a>
                <div className='flex gap-12'>
                    <a className="text-white text-[1.25rem] font-semibold" href="">Personal</a>  
                    <a className="text-white text-[1.25rem] font-semibold" href="">Business</a>  
                    <a className="text-white text-[1.25rem] font-semibold" href="">Revolut {'<'}18</a>  
                    <a className="text-white text-[1.25rem] font-semibold" href="">Company</a>  
                </div>
            </div>
            <div className='flex gap-6'>
                <Button name={"Log in"} styleSecond={false} />
                <Button name={"Sign Up"} styleSecond={true} />
            </div>
        </div>
    )
}