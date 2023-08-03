'use client'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '@/redux/features/dataSlice'
import { AppDispatch, RootState } from '@/redux/store'
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
   <div className='bg-green-300 w-full h-full'>
    <Navbar/>
    <div className='flex justify-around'>
    <img src={data[0]?.image} width='500'/>
    
    <div className='flex flex-col  justify-center w-[50%] border-2 gap-4'>
    <h1 className='text-4xl'>{data[0]?.title}</h1>
    <h1 className='text-3xl'>{data[0]?.description}</h1>
    </div>
    </div>
    <div className='bg-white gap-4'>
      <p>Recent Posts</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
    
    <div className='grid grid-cols-3 gap-4 p-2'>
    {data.map((post)=>(
      <ul className='border-2'>
      <li className='' key={post.id}>
        <h1 className='text-green-900'>{post.title}</h1>
        <img src={post.image} width="200px"/>
        <h1>{post.description}</h1>
      </li>
      </ul>
    ))}
   </div>
   </div>
   </div>
   </>
  )
}
