"use client"
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Cards = ({ data }) => {

    return (
        <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-2' >
            <div>
                {/* <Link href={'/details/' + data.id}> */}
                <Image
                    src={data?.image}
                    alt='work-image'
                    width={500}
                    height={500}
                    className='w-full h-[220px] object-fit cursor-pointer rounded-md '
                />
                {/* </Link> */}
            </div>


            <div className='p-5 flex items-center justify-between'>
                <h2>{data?.title}</h2>
                <Link href={data?.link} target="_blank" rel="noopener noreferrer">
                    <span className='cursor-pointer'> <SquareArrowOutUpRight className='w-4 h-4' /> </span>
                </Link>
            </div>


        </div>
    )
}

export default Cards