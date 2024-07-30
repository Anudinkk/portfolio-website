"use client"
import React from 'react'

const Heros = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


    return (

        <div className="relative h-[500px] w-full bg-white  ">
            <div className="absolute bottom-0 left-0 right-0 top-0 
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
            bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            </div>
            <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center'>
                <div className=''>
                    <h3 className='md:text-[30px] text-[15px] text-blue-500 font-semibold '> Full Stack Developer</h3>
                </div>
                <div>
                    <h1 className='md:text-[80px] text-[40px] text-blue-500 font-extrabold w-full flex items-center justify-center uppercase'>
                        Protfolio
                        <span className='rotate-90 md:text-[30px] text-[20px] text-blue-300 leading-tight'>{getCurrentYear()}</span>
                    </h1>
                </div>

            </div>
        </div>
        // <div class="relative h-[800px] w-full bg-black">
        //     <div class="absolute bottom-0 left-0 right-0 top-0 
        //         bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        //         bg-[size:14px_24px]">
        //     </div>
        //     <div class="absolute left-0 right-0 top-[-10%] h-[700px] w-full rounded-full 
        //         bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
        //         <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center'>
        //             <h1 className='text-[80px] text-white font-extrabold w-full flex items-center justify-center'>Protfolio <span className='rotate-90 text-[60px]'>2024</span></h1>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Heros