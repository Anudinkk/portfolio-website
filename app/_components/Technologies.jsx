"use client"
import React from 'react'
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNode } from "react-icons/fa";
import { motion } from 'framer-motion';

const Technologies = () => {

    const iconVariants = (durations) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: durations,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    })
    return (
        <div className='mt-12 px-5 md:px-0'>
            <div className='relative border border-gray-200 rounded-lg p-5'>
                <h2 className='absolute -top-3 left-5 font-medium bg-white px-2'>Technologies</h2>
                <div className='flex flex-wrap items-center justify-center gap-4 my-5'>

                    <motion.div
                        variants={iconVariants(7)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <RiReactjsLine className='text-5xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <RiNextjsFill className='text-5xl text-black' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <SiMongodb className='text-5xl text-green-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <RiTailwindCssFill className='text-5xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <FaNode className='text-5xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer'>
                        <FaHtml5 className='text-5xl text-orange-600' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer '>
                        <FaCss3Alt className='text-5xl text-blue-600' />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Technologies