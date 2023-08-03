import React from 'react'
import { toast } from 'react-toastify'

const protectedroutes = ({children}:{children:React.ReactNode}) => {
  const token=localStorage.getItem('session-token')
  if(token){
    return<div>{children}</div>}
    else{
      toast.error("please login to post a new post.")
    }
  }
 


export default protectedroutes