'use client'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '@/redux/features/dataSlice'
import { AppDispatch, RootState } from '@/redux/store'

export default function Home() {
  const dispatch=useDispatch<AppDispatch>()
  const{data, status, error}=useSelector((state: RootState)=>state.posts)
  console.log(data)
 
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
