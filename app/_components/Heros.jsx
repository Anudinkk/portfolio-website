"use client"
import React from 'react'

const Heros = () => {
    return (
        <div className="relative h-[500px] w-full bg-white dark:bg-card">
            {/* Grid for Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:hidden">
            </div>

            {/* Grid for Dark Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] hidden dark:block">
            </div>

            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <div>
                    {/* Updated text color for dark mode */}
                    <h3 className='md:text-[30px] text-[15px] text-blue-500 dark:text-blue-400 font-semibold'> Data Scientist Portfolio </h3>
                </div>
                <div>
                    {/* Updated text color for dark mode */}
                    <h1 className='md:text-[80px] text-[40px] text-blue-500 dark:text-blue-400 leading-tight font-extrabold w-full flex items-center justify-center uppercase'>
                        Anudin KK
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Heros

