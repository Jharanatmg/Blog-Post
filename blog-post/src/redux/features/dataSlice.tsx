import React from 'react'
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

const JSONURL='http://localhost:4000/posts'

export const fetchPosts= createAsyncThunk<Post[],void,{}>('posts/fetchPosts', async()=>{
  const response= await fetch(JSONURL)
  const data=await response.json()
  return data as Post[]
})
interface Post{
  id:number,
  
  title:string,
  description:string,
  author:string,
  date:string,
  image:string,

}
interface PostState{
  data:Post[],
  status:'idle'|'loading'|'succeeded'|'failed'
  error:string|null

}
const initialState:PostState={
  data:[],
  status:'idle',
  error:null,
}

 const dataSlice = createSlice({
  name:'posts',
  initialState,

  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchPosts.pending, (state)=>{
      state.status='loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action:PayloadAction<Post[]>) => {
      state.status = 'succeeded';
      state.data = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
})
export default dataSlice.reducer
  

