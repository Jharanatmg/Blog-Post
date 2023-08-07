'use client'
import React from 'react'
import { toast } from 'react-toastify'
import {useRouter} from 'next/navigation'

const Protected = ({children}:{children:React.ReactNode}) => {
  const router= useRouter()
  const token = localStorage.getItem('session-token')
  console.log(token)
  if(token){
    
    return<div>{children}</div>
    router.push('/newpost')
  }
    else{
    router.push('/')
    }
  }
 


export default Protected