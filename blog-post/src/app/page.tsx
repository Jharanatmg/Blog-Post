'use client'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '@/redux/features/dataSlice'
import { AppDispatch, RootState } from '@/redux/store'

export default function Home() {
  return (
    <>
   <div className='bg-green-300 w-full h-full'>
    {data.map((post)=>(
      <ul className=''>
      <li className='' key={post.id}>
        <h1 className='text-green-900'>{post.title}</h1>
        <img src={post.image} width="200px"/>
        <h1>{post.description}</h1>
      </li>
      </ul>
    ))}
   </div>
   </>
  )
}
