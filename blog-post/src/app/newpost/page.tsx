"use client";
import React, {useEffect} from "react";
import Navbar from "@/components/navbar";
import Protected from '@/components/protected';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchPosts } from '@/redux/features/dataSlice'


function page() {
  const{data, status, error}=useSelector((state: RootState)=>state.posts)
  const dispatch=useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  if(status==='loading'){
    return <p>Loading...</p>
  }
  if(status==='failed'){
    return<p>Error:{error}</p>
  }
  
  return (
  <Protected>
    <div className="bg-white w-full h-auto flex justify-around border-2">
    
    <img src={data[0]?.image} width='500px'/>
    
      <form className='flex flex-col w-[50%] gap-4'>
    <label>Title</label>
    <input className="border-2 outline-none p-4 rounded-md" type="text" placeholder="title.."/>
    <label>Description</label>
    <input className="border-2 outline-none p-4 rounded-md h-44" type="text" placeholder="description..."/>
    <label>Image</label>
    <input className="border-2 outline-none p-4 rounded-md"  type="text" placeholder="upload.."/>
    <label>Date</label>
    <input className="border-2 outline-none p-4 rounded-md" type="text" placeholder="date.."/>
    <label>Author</label>
    <input className="border-2 outline-none p-4 rounded-md"  type="text" placeholder="author.."/>
    <button onClick={handleSubmit}>Add</button>
</form>

  </div>
  

  </Protected>
  )
}

export default page;
