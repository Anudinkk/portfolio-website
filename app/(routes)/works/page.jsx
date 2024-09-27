import Cards from '@/app/_components/Cards'
import { PROJECTS } from '@/utils/constants'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 md:px-20 h-screen'>
      <h2 className='mt-5 text-4xl font-extrabold'>MY WORKS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {PROJECTS.map((item, index) => (
          <Cards data={item} key={index} />
        ))}

      </div>
    </div>
  )
}

export default page