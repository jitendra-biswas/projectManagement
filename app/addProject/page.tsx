"use client"
import React from 'react'
import {addProject} from '@/app/Actions/projectAction'

const page = () => {
  async function submitHandeler(e:any){
      e.preventDefault();
      const form = e.currentTarget
      const formData = new FormData(form);
      const title = formData.get('title') as string;
      const desc = formData.get('desc') as string;
      await addProject(title,desc)

      alert("Project Created Successfully")
      form.reset();
  }
  return (
    <div className='p-5'>
      <h2 className='font-semibold text-2xl'>Add Your Project Here</h2>

      <div className="container w-[35vw] border-2 border-gray-200 rounded p-5 mt-5 shadow-2xl">
        <p className='font-semibold text-xl'>Add Project</p>
        <form onSubmit={submitHandeler} className='w-full flex flex-col gap-4 mt-5'>
            <div className="title">
                <label htmlFor="title" className='text-md'>Project Title</label> <br />
                <input type="text" name='title' placeholder='Your Project Title ' id='title' className='border-2 border-gray-200 w-full h-11 px-3 rounded mt-2 outline-0' />
            </div>
            <div className="desc">
                <label htmlFor="desc" className='text-md'>Project Description</label> <br />
                <input type="text" name='desc' placeholder='Your Project Description ' itemID='desc' className='border-2 border-gray-200 w-full h-11 px-3 rounded mt-2 outline-0' />
            </div>
            
            <button className='w-fit bg-gray-900 text-white px-3 py-1 rounded hover:scale-105 transition-all cursor-pointer'>Create Project</button>
        </form>
      </div>
    </div>
  )
}

export default page
