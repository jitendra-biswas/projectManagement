"use client"
import Link from 'next/link'
import {registerUser} from "@/app/Actions/userAction"

const page = () => {
    async function submitHandler(e:any) {
      e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(form);
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        await registerUser(username,email,password);
        alert("User register successfully");
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="form-container border-2 border-gray-200 p-5 w-[35vw] flex flex-col items-center justify-center rounded-md shadow-2xl">
        <h2 className='text-2xl font-semibold'>Register User</h2>
        <form onSubmit={submitHandler} className='w-full  h-full flex flex-col gap-4'>
            <div className="username">
                <label htmlFor="username" className='font-semibold'>Username</label> <br />
                <input type="text" name='username' placeholder='John Doe' id='username' className='h-11 border-2 border-gray-200 rounded px-3 w-full mt-1' />
            </div>
            <div className="email">
                <label htmlFor="email" className='font-semibold'>Email</label> <br />
                <input type="email" name='email' placeholder='example@gmail.com' id='email' className='h-11 border-2 border-gray-200 rounded px-3 w-full mt-1' />
            </div>
            <div className="password">
                <label htmlFor="password" className='font-semibold'>Password</label> <br />
                <input type="password" name='password' placeholder='********' id='password' className='h-11 border-2 border-gray-200 rounded px-3 w-full mt-1' />
            </div>

            <button type='submit' className='bg-zinc-900 text-white p-2.5 rounded cursor-pointer hover:scale-103 transition-all'>Register</button>
            <Link href="/login" className="hover:underline text-center" >Already hava an account? Login</Link>
        </form>
      </div>
    </div>
  )
}

export default page
