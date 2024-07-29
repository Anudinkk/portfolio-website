"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
// import Technologies from './Technologies'

const Intro = () => {
    return (
        <div className='border-y-[1px] border-gray-200 pb-12 '>
            <div className='flex flex-col items-center gap-10 md:flex-row'>
                <div whileInView={{ opcacity: 1 }}>
                    <Image src='/I.png' alt='Image' width={300} height={300} className=' h-[300px] object-contain rounded-full ' />
                </div>
                <div className='px-10 mt-10 w-full'>
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='text-3xl font-bold my-2'>Hi, I'm Anudin kk
                    </motion.h1>
                    {/* <span className='bg-gradient-to-r from-blue-600 via-slate-400 to-purple-500 bg-clip-text text-3xl font-semibold
                    tracking-tight text-transparent'>
                        Full Stack Developer
                    </span> */}
                    <motion.h3 className='mt-2'
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >

                        Self-motivated web developer with 1 year of experience working on projects. Passionate and
                        hardworking with a penchant for meeting deadlines.Interested in roles involving best practices
                        and offering diverse customer projects.

                    </motion.h3>
                </div>
            </div>
            {/* <Technologies /> */}
        </div >
    )
}

export default Intro