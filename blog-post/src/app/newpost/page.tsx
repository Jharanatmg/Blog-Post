"use client";
import React from "react";
import Navbar from "@/components/navbar";


function page() {
  return <div className="bg-white w-full h-screen">
    <Navbar/>
    <input type="text" placeholder="enter title"/>
    <input type="text" placeholder="enter author"/>
    <input type="text" placeholder="enter description"/>
    <input type="text" placeholder="enter date"/>
    <input type="text" placeholder="enter image"/>
  </div>;
}

export default page;
