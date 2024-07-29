"use client"
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiDrizzle, SiExpress, SiGooglemaps, SiJavascript, SiMongodb, SiShadcnui, SiStrapi } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNode, FaSass } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Link from 'next/link';



const ProjectDetails = ({ data }) => {

    const TechnologyList = [
        { id: 1, icon: <RiNextjsFill className='w-8 h-8' />, name: 'Next.js' },
        { id: 2, icon: <RiReactjsLine className='w-8 h-8 text-blue-500' />, name: 'React' },
        { id: 3, icon: <RiTailwindCssFill className='w-8 h-8 text-blue-500' />, name: 'Tailwind' },
        { id: 4, icon: <SiMongodb className='w-8 h-8 text-green-500' />, name: 'Mongodb' },
        { id: 5, icon: <SiExpress className='w-8 h-8 text-yellow-600' />, name: 'Express' },
        { id: 5, icon: <FaNode className='w-8 h-8 text-green-600' />, name: 'Node' },
        { id: 4, icon: <FaCss3Alt className='w-8 h-8 text-blue-500' />, name: 'Css' },
        { id: 4, icon: <FaSass className='w-8 h-8 text-pink-600' />, name: 'Scss' },
        { id: 5, icon: <FaHtml5 className='w-8 h-8 text-orange-500' />, name: 'Html' },
        { id: 4, icon: <SiShadcnui className='w-8 h-8' />, name: 'Shadcn' },
        { id: 4, icon: <SiDrizzle className='w-8 h-8' />, name: 'Drizzle' },
        { id: 4, icon: <SiClerk className='w-8 h-8' />, name: 'Clerk' },
        { id: 4, icon: <SiGooglemaps className='w-8 h-8' />, name: 'Google-place-api' },
        { id: 4, icon: <BiLogoPostgresql className='w-8 h-8 text-blue-900' />, name: 'Postgres' },
        { id: 4, icon: <SiStrapi className='w-8 h-8 text-blue-500' />, name: 'Strapi' },
        { id: 4, icon: <SiClerk className='w-8 h-8' />, name: 'Kinde' },
        { id: 4, icon: <SiJavascript className='w-8 h-8 text-yellow-500' />, name: 'Javascript' },
    ];


    const matchedIcons = data.technologies?.map(tech => {
        const match = TechnologyList.find(item => item.name === tech);
        return match;
    }).filter(icon => icon !== null);

    // if (!data?.link) {
    //     return null; // or some fallback UI
    // }

    return (
        <div className='p-5 md:px-20 h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 border-[2px] p-5 mt-5 rounded-lg'>

                <div className=''>
                    <Image src={data?.image}
                        alt='data-image'
                        width={500}
                        height={500}
                        className='rounded-lg h-[350px] w-full object-fill border-gray-200 border-2'
                    />
                </div>

                <div className='col-span-1 mt-5 md:px-5 flex flex-col gap-3 items-baseline'>
                    <h2 className='font-bold text-2xl'>{data?.title}</h2>

                    {data?.link &&
                        <Link href={data?.link} target="_blank" rel="noopener noreferrer" >
                            <h2 className='flex items-center gap-2 cursor-pointer text-blue-600 font-semibold'>
                                <span className='cursor-pointer'>
                                    <SquareArrowOutUpRight className='w-4 h-4' />
                                </span>
                                {data?.link}
                            </h2>
                        </Link>
                    }


                    <h3 className='mt-2'>{data?.description}</h3>

                    <div className='flex gap-4 flex-wrap mt-5'>
                        {matchedIcons?.map((item, index) => (
                            <div className='flex flex-col items-center gap-1'>
                                <h2 key={index} >{item?.icon}</h2>
                                <span className='text-[12px]'>{item?.name}</span>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div >
    )
}

export default ProjectDetails