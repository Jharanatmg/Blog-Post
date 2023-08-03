'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function navbar() {
  
  const useremail=localStorage.getItem('email')
  console.log(useremail)
  const router=useRouter()
  const handleLogout=()=>{
    localStorage.removeItem('session-token')
    router.push('/signin')
  }
  const handlenewpost=()=>{
    const token=localStorage.getItem('session-token')
    if(token){
      router.push('/newpost')
    }
    else{
      
      toast.error("please login to post a new post.")
    }
  }
  return <div className="flex w-full justify-between p-4">
    <ul>
      <li>Stanton</li>
    </ul>
    <ul className='flex w-96 justify-between'>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
      <li>Shop</li>
      <button onClick={handlenewpost}>Create New post</button>
      {useremail ? (
        <>
        <li>{useremail}</li>

         <button onClick={handleLogout}>Logout</button>
         </>
      ):(
      <button><Link href='/signin'>Login</Link></button>
      )}
      
     
    </ul>
    <ToastContainer/>
  </div>;
}

export default navbar;
