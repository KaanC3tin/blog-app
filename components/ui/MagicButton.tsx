import React from 'react'
import { Icon } from '@iconify/react';

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasses?: string;

}) => {
    return (
        <div>
            <button className=" w-full relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none md:w-60 md:mt-10">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl
                gap-2
                ${otherClasses}`}>
                    {position === "left" && icon}
                    {title}
                    {position === "right" && icon}
                    {icon && <Icon icon={icon} className=" scale-150" />}

                </span>
            </button>
            {/* <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Shimmer
            </button> */}
        </div>
    )
}

export default MagicButton