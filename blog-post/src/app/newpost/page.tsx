"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Protected from '@/components/protected';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


function page() {
  const{data, status, error}=useSelector((state: RootState)=>state.posts)
  
  return (
  <Protected>
    <div className="bg-white w-full h-screen">
    <Navbar/>
    <img src={data[0]?.image} width='500'/>
    <input type="text" placeholder="enter title"/>
    <input type="text" placeholder="enter author"/>
    <input type="text" placeholder="enter description"/>
    <input type="text" placeholder="enter date"/>
    <input type="text" placeholder="enter image"/>
  </div>
  </Protected>
  )
}

export default page;
