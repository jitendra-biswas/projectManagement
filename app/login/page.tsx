"use client"
import Link from 'next/link'
import {loginUser} from "@/app/Actions/userAction"
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    async function submitHandler(e:any) {
          e.preventDefault();
            const form = e.currentTarget
            const formData = new FormData(form);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            await loginUser(email,password);
            router.push("/dashboard")
        }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
         <div className="form-container border-2 border-gray-200 p-5 w-[30vw] flex flex-col items-center justify-center rounded-md shadow-2xl">
           <h2 className='text-2xl font-semibold'>Welcome Back !</h2>
           <form onSubmit={submitHandler} className='w-full  h-full flex flex-col gap-4'>
               
               <div className="email">
                   <label htmlFor="email" className='font-semibold'>Email</label> <br />
                   <input type="email" name='email' placeholder='example@gmail.com' id='email' className='h-11 border-2 border-gray-200 rounded px-3 w-full mt-1' />
               </div>
               <div className="password">
                   <label htmlFor="password" className='font-semibold'>Password</label> <br />
                   <input type="password" name='password' placeholder='********' id='password' className='h-11 border-2 border-gray-200 rounded px-3 w-full mt-1' />
               </div>
   
               <button type="submit" className='bg-zinc-900 text-white p-2.5 rounded cursor-pointer hover:scale-103 transition-all'>Login</button>
               <Link href="/register" className="hover:underline text-center" >Don't hava an account? Register</Link>
           </form>
         </div>
       </div>
  )
}

export default page
