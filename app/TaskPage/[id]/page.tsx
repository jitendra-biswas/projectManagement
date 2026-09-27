"use client";

import React, { useEffect, useState } from "react";
import {
  getProjectById,
  createTask,
  findAllTasks,
} from "@/app/Actions/taskActions";
import { useParams } from "next/navigation";
import TaskCard from "@/app/Components/TaskCard";

const Page = () => {
  const params = useParams();
  const id = params.id as string;

  const [title, setTitle] = useState<any>("");
  const [Tasks, setTasks] = useState<any[]>([]);

  // Get project
  useEffect(() => {
    async function getProject() {
      const res = await getProjectById(id);
      setTitle(res?.title);
    }

    getProject();
  }, [id]);

  // Function to get tasks
  async function loadTasks() {
    const tasks = await findAllTasks(id);
    setTasks(tasks);
  }

  // Get tasks when page loads
  useEffect(() => {
    loadTasks();
  }, [id]);

  async function submitHandeler(e: any) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const taskTitle = formData.get("title") as string;
    const desc = formData.get("desc") as string;

    await createTask(id, taskTitle, desc);

    // Get updated tasks
    await loadTasks();

    alert("Task Created Successfully");
    form.reset();
  }

  return (
    <div className="p-5">
      <div>
        <p className="text-xl font-sans">Project Title :</p>
        <h2 className="font-extralight text-xl">{title}</h2>
      </div>

      <div className="formContainer w-[40vw] mt-10">
        <h2 className="text-xl font-sans">Create Your Tasks</h2>

        <form
          onSubmit={submitHandeler}
          className="w-full flex flex-col gap-4 mt-5"
        >
          <div>
            <label htmlFor="title">Task Title</label>
            <br />
            <input
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
            Create Task
          </button>
        </form>
      </div>

      <div className="mt-5">
        <p className="text-xl">Your Tasks</p>

        <div className="mt-5">
          {Tasks.map((task:any) => (
            <TaskCard
              key={task.id}
              task={task}
              projectId={id}
              refreshTasks={loadTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
