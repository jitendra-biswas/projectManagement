"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {getTaskById,updateTask} from "@/app/Actions/taskActions"

const page = () => {
    const params = useParams();
    const id = params.id as string;
    const [uniqueTitle, setuniqueTitle] = useState<any>("")
    const [uniqueDesc, setuniqueDesc] = useState<any>("")

    useEffect(() => {
      async function getUniqueTask(){
        const res = await getTaskById(id)
        const title = res?.title;
        const desc = res?.desc;
        setuniqueTitle(title);
        setuniqueDesc(desc);
      }
      getUniqueTask();
    }, [id])


    async function submitHandeler(e:any){
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const title = formData.get("title") as string;
        const desc = formData.get("desc") as string;
        const res = await updateTask(id,title,desc);

        if(res.success){
            alert(res.message);
        }
        form.reset()
    }
    
  return (
    <div className='px-5'>
       <div className="formContainer w-[40vw] mt-10">
        <h2 className="text-xl font-sans">Edit Your Tasks</h2>

        <form
        onSubmit={submitHandeler}
          className="w-full flex flex-col gap-4 mt-5"
        >
          <div>
            <label htmlFor="title">Task Title</label>
            <br />
            <input
            value={uniqueTitle}
            onChange={(e)=>setuniqueTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Your Task Title"
              id="title"
              className="border-b-2 border-b-gray-300 w-full h-11 px-3 rounded mt-2 outline-0"
            />
          </div>

          <div>
            <label htmlFor="desc">Task Description</label>
            <br />
            <input
            value={uniqueDesc}
            onChange={(e)=>setuniqueDesc(e.target.value)}
              type="text"
              name="desc"
              placeholder="Your Task Description"
              id="desc"
              className="border-b-2 border-b-gray-300 w-full h-11 px-3 rounded mt-2 outline-0"
            />
          </div>

          <button
            type="submit"
            className="w-fit bg-gray-900 text-white px-3 py-1 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default page
