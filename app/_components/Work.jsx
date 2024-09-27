"use client"
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { PROJECTS } from '@/utils/constants'
import Link from 'next/link'

const Work = () => {

  const [Projects, setProjects] = useState([]);
  
  useEffect(() => {
    setProjects(PROJECTS);
  }, []);

  return (
    <div className='my-10 px-5 md:px-0 lg:px-0'>
      <div className='px-2 flex justify-between'>
        <div>
          <h2 className='text-4xl font-extrabold'>MY WORKS</h2>
          <h4 className='text-lg text-slate-400'>Recent Ones</h4>
        </div>
        <div>
          <Link href={`/works`}> <h6 className='text-blue-500 cursor-pointer font-semibold'>View All</h6> </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
        {Projects.map((item, index) => index < 3 && (
          <Cards data={item} key={index} />
        ))}

      </div>

    </div>
  )
}

export default Work