import React from 'react'

export const TitleSection = ({ bottomMobile = 'bottom-0', bottomDesktop = '2xl:bottom-3', rightDesktop = '2xl:right-[7.97%]', title = '' }) => {
    return (
        <div className={`absolute ${bottomMobile} ${bottomDesktop} ${rightDesktop}  rounded-t-md left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none font-medium md:right-[6.1%] text-slate-500 md:rounded-3xl uppercase text-sm 2xl:text-base z-20 w-40 text-center flex items-center justify-center`}>
            {title}
        </div>
    )
}
