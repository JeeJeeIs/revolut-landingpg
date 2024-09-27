type buttonProps = {
    name: string;
    styleSecond: boolean;
}

export function Button({ name, styleSecond }: buttonProps) {
    return (
        <>
            <button className={`${styleSecond ? "text-black bg-white h-[55px] w-[135px] text-[1.25rem] font-semibold rounded-full hover:opacity-85" : "text-white text-[1.25rem] h-[55px] w-[135px] rounded-full font-semibold hover:bg-black/80"} transition-all`}> {name} </button>
        </>
    )
}