import { useState } from 'react'


import { Button } from './NavButton';

type SubmenuItemsProps = {
    title: string;
    childItems: string[];
}

type SubmenuProps = {
    SubmenuActive: boolean;
    changeSubmenuActive: (data: boolean) => void
}

const SubmenuItems = ({ title, childItems }: SubmenuItemsProps) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex flex-col gap-4'>
                {childItems.map((text, index) => (
                    <div key={index} className='text-lg'>{text}</div>
                ))}
            </div>
        </div>
    );
}

export function Submenu({ SubmenuActive, changeSubmenuActive }: SubmenuProps) {
    
    const items = [
        "Joint Accounts",
        "Savings",
        "Pro for Freelance",
        "Revolut <18 Parents & Guardians",
    ]
    return (
        <div onMouseEnter={() => changeSubmenuActive(true)} onMouseLeave={() => changeSubmenuActive(false)} className={`${SubmenuActive ? "block" : "hidden" } bg-white w-[100%] h-[60%] px-[250px] py-[50px] mt-[-20px]`}>
            <h1 className='font-semibold text-4xl font-Aeonik'>Discover Revolut &#8594;</h1>
            <div className='grid grid-cols-6 mt-10'>
                <SubmenuItems title="Essentials" childItems={items}/>
                <SubmenuItems title="Essentials" childItems={items}/>
                <SubmenuItems title="Essentials" childItems={items}/>
                <SubmenuItems title="Essentials" childItems={items}/>
                <SubmenuItems title="Essentials" childItems={items}/>
                <SubmenuItems title="Essentials" childItems={items}/>
            </div>
        </div>
    )
}