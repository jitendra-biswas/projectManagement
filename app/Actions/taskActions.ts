"use server"
import {prisma} from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getProjectById(id:string){
    const project =  await prisma.project.findUnique({
        where:{
            id
        }
     })
     return project
}

export async function createTask(projectId:string,title:string, desc:string){
    await prisma.task.create({
        data:{
            title,
            desc,
            status:false,
            projectId
        }
    })
}

export async function findAllTasks(projectId:string){
   const tasks =  await prisma.task.findMany({
        where:{
            projectId
        }
    })
    return tasks;
}


export async function updateStatus(id:string,status:boolean) {
    await prisma.task.update({
        where:{
            id
        },
        data:{
            status
        }
    })
    revalidatePath('/')
    revalidatePath('/TaskPage/')
}


export async function deleteTask(id:string){
    await prisma.task.delete({
        where:{
            id
        }
    })

    return{
        success:true,
        message:"Task deleted successfully"
    }
}

export async function getTaskById(id:string){
    const task = await prisma.task.findUnique({
        where:{
            id
        }
    })
    return task
}

export async function updateTask(id:string,title:string,desc:string){
    await prisma.task.update({
        where:{
            id
        },
        data:{
            title,
            desc
        }
    })

    return {
        success:true,
        message:"Task updated Successfully"
    }
}