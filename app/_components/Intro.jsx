"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
// import Technologies from './Technologies'

const Intro = () => {
    return (
        <div className='border-y-[1px] border-gray-200 pb-12 dark:bg-card'>
            <div className='flex flex-col items-center gap-10 md:flex-row'>
                <div whileInView={{ opcacity: 1 }}>
                    <Image src='/I.png' alt='Image' width={300} height={300} className=' h-[300px] object-contain rounded-full ' />
                </div>
                <div className='px-10 mt-10 w-full'>
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='text-2xl md:text-3xl font-bold my-2 dark:text-blue-500'>Hi, I'm Anudin kk
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

                        Aspiring Data Scientist with a strong passion for extracting insights from data and solving complex problems.
                        Currently enhancing my expertise in data science through tools such as Python, SQL, and data visualization
                        techniques. Seeking an entry-level position in data analytics or data science to contribute to organizational success
                        and grow professionally in this exciting field. .

                    </motion.h3>
                </div>
            </div>
            {/* <Technologies /> */}
        </div >
    )
}

export default Intro