"use client"
import React from 'react'
import { motion } from 'framer-motion';

// --- WORKING ICONS (We keep these) ---
import { FaPython } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

// --- SVG COMPONENTS FOR PROBLEMATIC ICONS ---
// We define the icons that were causing errors directly here to bypass the import issue.

const PowerBiIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5v9h9v-9h-9zM13.5 1.5v9h9v-9h-9zM1.5 13.5v9h9v-9h-9zM13.5 13.5v9h9v-9h-9z"/></svg>
);

const ExcelIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7.29-.3.7-.3h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.25L9.33 18H7v4.5h16V3H7v4.25h10.75v2.5H6v3.5zm-.1-5.04L2.5 12l3.4-3.79 3.4 3.8z"/></svg>
);

const MysqlIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.523 0-10 2.239-10 5v1.886C2 10.963 2 12 2 12s0 .047.002.114V17c0 2.761 4.477 5 10 5s10-2.239 10-5v-4.886C22 12.047 22 12 22 12s0-1.037 0-3.114V7c0-2.761-4.477-5-10-5zm0 1.562c4.694 0 8.5 1.987 8.5 4.438s-3.806 4.438-8.5 4.438S3.5 10.187 3.5 7.75 7.306 3.562 12 3.562zM3.5 12c0 .804.561 1.524 1.488 2.288C6.012 13.524 6.91 13 8.5 13c2.75 0 5.4.5 6.5 1.5.5-1 1.5-1.5 3-1.5 1.59 0 2.488-.524 3.512 1.212C21.439 13.524 22 12.804 22 12v-.292c-.062.012-.125.023-.188.033-1.375.213-3.25.321-4.812.321-2.062 0-3.812-.188-5.188-.438-.562-.104-1.312-.25-1.812-.25s-1.25.146-1.812.25C6.812 12.03 5.062 12.219 3 12.156c-.063-.01-.125-.021-.188-.033L3.5 12zM12 15.125c-4.694 0-8.5 1.987-8.5 4.438s3.806 4.438 8.5 4.438 8.5-1.987 8.5-4.438-3.806-4.438-8.5-4.438z"/></svg>
);

const PandasIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 4.8v1.2H12V4.8h9.6zM2.4 8.4V7.2h19.2v1.2H2.4zm19.2 2.4v1.2H12v-1.2h9.6zm-19.2 4.8V12h7.2v3.6H2.4zm19.2 2.4v1.2H12v-1.2h9.6z"/></svg>
);

const NumpyIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.181 12.333L22.25 24h-3.66L9.04 12.445v11.417H5.25V.138h3.78v11.59L18.412 0h3.66L12.18 12.333z"/></svg>
);

const MatplotlibIcon = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 20H2.75V4h-2.5v16.75c0 .41.34.75.75.75H22v-1.5zm-5-11.25c-.28 0-.5.22-.5.5v7.5h-1.5v-10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10h-1.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4h-1.5v-5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5H8.75v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3H6.25v-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4h-2v-5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v2.25h1.5v-3c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v5h1.5v-4c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10h1.5v-7.5c0-.28-.22-.5-.5-.5z"/></svg>
);


const Technologies = () => {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    })

    return (
        <div className='mt-12 px-5 md:px-0 dark:bg-card'>
            <div className='relative border border-gray-200 rounded-lg p-5 dark:bg-card'>
                <h2 className='absolute -top-3 left-5 font-medium bg-white px-2 dark:bg-card'>Technologies</h2>
                <div className='flex flex-wrap items-center justify-center gap-4 my-5 '>

                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <FaPython className='text-5xl text-blue-500' />
                        <span className='text-xs font-medium'>Python</span>
                    </motion.div>
                    
                    <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <TbBrain className='text-5xl text-pink-500' />
                        <span className='text-xs font-medium'>Machine Learning</span>
                    </motion.div>

                    <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <PowerBiIcon className='w-12 h-12 fill-yellow-500' />
                        <span className='text-xs font-medium'>Power BI</span>
                    </motion.div>

                    <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <ExcelIcon className='w-12 h-12 fill-green-600' />
                        <span className='text-xs font-medium'>Excel</span>
                    </motion.div>

                    <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <MysqlIcon className='w-12 h-12 fill-sky-700' />
                        <span className='text-xs font-medium'>MySQL</span>
                    </motion.div>
                    
                    <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <PandasIcon className='w-12 h-12 fill-blue-800' />
                        <span className='text-xs font-medium'>Pandas</span>
                    </motion.div>
                    
                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <NumpyIcon className='w-12 h-12 fill-sky-500' />
                        <span className='text-xs font-medium'>Numpy</span>
                    </motion.div>
                    
                    <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <MatplotlibIcon className='w-12 h-12 fill-purple-600' />
                        <span className='text-xs font-medium'>Matplotlib</span>
                    </motion.div>
                    
                    <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-2 border-gray-200 p-2 cursor-pointer w-32 h-32 flex flex-col items-center justify-center gap-2'>
                        <BsBarChartFill className='text-5xl text-orange-600' />
                        <span className='text-xs font-medium'>Seaborn</span>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Technologies;