import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='w-60 h-screen border-r-2 border-r-gray-200 p-5'>
        <div className="font font-extralight">ProjectManager</div>
        <div className="elems flex flex-col mt-5">
            <Link href="/dashboard" className='w-full h-11 rounded flex items-center px-3 hover:bg-gray-200'>Dashboard</Link>
            <Link href="/allprojects" className='w-full h-11  rounded flex items-center px-3 hover:bg-gray-200'>All projects</Link>
            <Link href="/addProject" className='w-full h-11 rounded flex items-center px-3 hover:bg-gray-200'>Add Project</Link>
        </div>
        
    </div>
    </>
  )
}

export default Sidebar
