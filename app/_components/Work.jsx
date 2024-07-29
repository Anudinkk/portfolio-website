"use client"
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { PROJECTS } from '@/utils/constants'

const Work = () => {

  const [Projects, setProjects] = useState([]);
  useEffect(()=>{
    setProjects(PROJECTS);
  },[]);
 
  return (
    <div className='my-10 px-5 md:px-0 lg:px-0'>
      <div className='px-2'>
        <h2 className='text-4xl font-extrabold'>MY WORKS</h2>
        <h4 className='text-lg text-slate-400'>Recent Ones</h4>
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