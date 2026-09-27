"use server"
import {prisma} from "@/app/lib/prisma"
import bcrypt from 'bcrypt'

export async function registerUser(username:string, email:string, password:string){
    const hashPassword = await bcrypt.hash(password,10) ;
      await prisma.user.create({
        data:{
            username,
            email,
            password:hashPassword
        }
      })
}



export async function loginUser(email:string, password:string) {
    const validUser = await prisma.user.findUnique({
          where:{
            email
          }
    })

    if(!validUser){
        return{
            success:false,
            message:"Invalid user"
        }
    }

    const validPassword = await bcrypt.compare(password,validUser.password);

    if(!validPassword){
        return{
            success:false,
            message:"Invalid email or password"
        }
    }


    return {
        success:true
    }
}