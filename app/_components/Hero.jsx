import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative'>
            <Image
                src="/vector1.jpg"
                alt='cover'
                width={900}
                height={600}
                className='w-full h-[500px] object-cover'
            />

            <div className='absolute top-0 right-0 bottom-0 left-0  flex items-center'>
                <h1 className='text-[80px] text-white font-extrabold w-full flex items-center justify-center'>Protfolio <span className='rotate-90 text-[60px]'>2024</span></h1>
            </div>
        </div>
    )
}

export default Hero