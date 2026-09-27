"use server"
import {prisma} from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache';

export async function addProject(title:string, desc:string){
    await prisma.project.create({
        data:{
            title,
            desc,
            status:false
        }
    })
}

export async function getAllProjects() {
    const projects = await prisma.project.findMany();
    return projects
}

export async function getPendingProject(){
    const pendingProject = await prisma.project.findMany({
        where:{
            status:false,
        }
    })
    return pendingProject;
}


export async function updateStatus(id:string,status:boolean) {
   await prisma.project.update({
        where:{
            id
        },
        data:{
            status
        }
    })
revalidatePath("/")
revalidatePath("/allprojects")
}


export async function deleteProject(id:string){
    await prisma.project.delete({
        where:{
            id
        }
    })

    return {
        message: "Project Deleted Successfully"
    }
}


export async function getCompletedProject(){
    const completeProject = await prisma.project.findMany({
        where:{
            status:true,
        }
    })
    return completeProject;
}


export async function getProjectById(id:string){
    const uniqueProject = await prisma.project.findUnique({
        where:{
            id
        }
    })
    return uniqueProject
}

export async function updateUniqueProject(id:string,title:string, desc:string){
     await prisma.project.update({
        where:{
            id
        },
        data:{
           title,
            desc,
        }
    })
    return{
        success:true,
        message: "Project updated successfully"
    }
}