"use client";

import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { updateStatus,deleteTask } from "@/app/Actions/taskActions";

const TaskCard = ({ task,refreshTasks }:any) => {
  const id = task.id;

  async function handleStatus() {
    if (task.status === false) {
      await updateStatus(id,true);

    }else{
        await updateStatus(id,false);
    }
    // Get updated tasks from database
      await refreshTasks();
  }

  async function handleDelete(){
    const conform = confirm("Do you want to delete this Task ?");
    if(conform){
    await deleteTask(id)
    }
     alert("Task deleted successfully");
    await refreshTasks()
  }

  return (
    <div>
      <div className="w-[50vw] border-2 border-gray-200 p-3 rounded">
        <div className="flex justify-between">
          <div>
            <Link href={`/TaskPage/${task.id}`} className="font-semibold hover:underline transition-all">
              {task.title}
            </Link>

            <p>{task.desc}</p>
          </div>

          <div className="buttons flex items-center gap-2 text-[18px]">
            <Link
              href={`/editTask/${id}`}
              className="text-blue-500"
            >
              <FiEdit3 />
            </Link>

            <button onClick={handleDelete} className="text-red-500 cursor-pointer">
              <MdOutlineDeleteOutline />
            </button>

            <button
              onClick={handleStatus}
              className="text-green-500 cursor-pointer"
            >
              <IoCheckmarkDone />
            </button>
          </div>
        </div>

        <p
          className={`font-semibold ${
            task.status ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {task.status ? "Completed" : "Pending"}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;