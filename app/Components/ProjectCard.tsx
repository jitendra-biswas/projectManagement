"use client";
import Link from "next/link";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { updateStatus, deleteProject } from "@/app/Actions/projectAction";
import { useRouter } from "next/navigation";

const ProjectCard = ({ data }:any) => {
  const router = useRouter()
  const id = data.id;
  async function handleStatus(e: any) {
    e.preventDefault();
    if(data.status == false){
      await updateStatus(id,true);
    }
    else{
      await updateStatus(id,false);
    }
    
  }

  async function handleDelete(e: any) {
    e.preventDefault();
    const conform = confirm("Do you want to delete this project");
    if (conform) {
      const result = await deleteProject(id);
      alert(result.message);
      router.refresh();
    }
  }
  return (
    <div className="w-[50vw] border-2 border-gray-200 p-3 rounded">
      <div className="flex justify-between">
        <div>
          <Link href={`/TaskPage/${data.id}`} className="font-semibold hover:underline transition-all">{data.title}</Link>
          <p>{data.desc}</p>
        </div>
        <div className="buttons flex items-center gap-2 text-[18px]">
          <Link href={`/editProject/${id}`} className="text-blue-500">
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
        className={`font-semibold ${data.status ? "text-green-500" : "text-yellow-500"}`}
      >
        {data.status ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default ProjectCard;
