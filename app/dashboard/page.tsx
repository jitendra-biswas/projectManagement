import AllProjects from '@/app/Components/AllProjects'
import {getAllProjects,getPendingProject,getCompletedProject} from "@/app/Actions/projectAction"
import { BsListTask } from 'react-icons/bs';
import { MdOutlineTask, MdPendingActions } from 'react-icons/md';

const page = async () => {
    const data = await getAllProjects();
    const noOfData = data.length;

    const pending = await getPendingProject();
    const noOfPending = pending.length;
    const completed = await getCompletedProject();
    const noOfComplte = completed.length;
  return (
    <div className='p-5 '>
      <h2 className='text-2xl font-semibold'>Dashboard</h2>
      
          <header className='w-full flex gap-3 mt-5'>
           <div className='border-2 w-48 h-26 flex items-center  gap-3 p-3 rounded border-gray-200 '>
                 <div className="left"><BsListTask className='text-green-500 text-2xl'/></div>
                 <div className="right h-full">
                   <h2 className='font-semibold'>Total Projects</h2>
                   <h2 className='text-xl'>{noOfData}</h2>
                 </div>
               </div>
           <div className='border-2 w-48 h-26 flex items-center  gap-3 p-3 rounded border-gray-200 '>
                 <div className="left"><MdPendingActions className='text-yellow-500 text-2xl' /></div>
                 <div className="right h-full">
                   <h2 className='font-semibold'>Pending Projects</h2>
                   <h2 className='text-xl'>{noOfPending}</h2>
                 </div>
               </div>
           <div className='border-2 w-48 h-26 flex items-center  gap-3 p-3 rounded border-gray-200 '>
                 <div className="left"><MdOutlineTask  className='text-green-500 text-2xl'/></div>
                 <div className="right h-full">
                   <h2 className='font-semibold'>Completed </h2>
                   <h2 className='text-xl'>{noOfComplte}</h2>
                 </div>
               </div>
          </header>


          <div className="tasks mt-10">
            <p className='font-semibold text-xl'>Latest Projects</p>
            <AllProjects />
          </div>
      
    </div>
  )
}

export default page
