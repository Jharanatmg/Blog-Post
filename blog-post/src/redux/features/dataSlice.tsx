import React from 'react'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const JSONURL='http://localhost:4000/posts'

export const fetchPosts= createAsyncThunk('posts/fetchPosts', async()=>{
  const response= await fetch(JSONURL)
  const data=await response.json()
  return data
})

 const dataSlice = createSlice({
  name:'posts',
  initialState:{data:[],
  status:'idle',
error:null,
},
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchPosts.pending, (state)=>{
      state.status='loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
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
  

