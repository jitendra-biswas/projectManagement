import React from "react";
import ProjectCard from "@/app/Components/ProjectCard";
import { getAllProjects } from "@/app/Actions/projectAction";

const AllProjects = async () => {
  const projects = await getAllProjects();
  return (
    <div className="mt-5 flex flex-col gap-3">
      {projects.map((items, idx) => {
        return <ProjectCard key={idx} data={items} />;
      })}
    </div>
  );
};

export default AllProjects;
