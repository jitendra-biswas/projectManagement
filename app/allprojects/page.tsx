import React from 'react'
import TaskCard from '@/app/Components/ProjectCard'
import {getAllProjects} from '@/app/Actions/projectAction'

const page = async() => {
         const projects = await getAllProjects();
  return (
    <div className='p-10'>
        <h2 className='font-semibold text-xl'>All Projects</h2>
        <div className='mt-5 flex flex-col gap-3'>
      {projects.map((items:any,idx:number)=>{
        return <TaskCard key={idx} data={items}/>
      })}
    </div>
    </div>
  )
}

export default page
