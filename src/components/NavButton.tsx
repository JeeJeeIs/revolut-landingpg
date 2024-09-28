type buttonProps = {
    name: string;
    styleSecond: boolean;
    SubmenuActive: boolean;
}

export function Button({ name, styleSecond, SubmenuActive }: buttonProps) {
    return (
        <>
            <button className={`${styleSecond ? `${SubmenuActive ? "text-white bg-black" : "text-black bg-white"} h-[55px] w-[135px] text-[1.25rem] font-semibold rounded-full hover:opacity-85` : `${SubmenuActive ? "text-black" : "text-white"} text-[1.25rem] h-[55px] w-[135px] rounded-full font-semibold hover:bg-black/80`} transition-all`}> {name} </button>
        </>
    )
}