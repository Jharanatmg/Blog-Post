"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Protected from "@/components/protected";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchPosts } from "@/redux/features/dataSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const { data, status, error } = useSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make the API request to add a new post
      const response = await axios.post("http://localhost:4001/posts", {
        id: (data.length + 1).toString(),
        title,
        description,
        image,
        author,
        date,
      });
      toast.success("You created a new post");
      console.log(response.data);

      // Clear the form fields after successful submission
      setTitle("");
      setDescription("");
      setImage("");
      setAuthor("");
      setDate("");

      // Fetch the updated posts after adding the new post
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  

  return (
    <Protected>
      <div className="bg-white w-full h-auto flex justify-around border-2 pb-3 font-poppins">
        <img src={data[0]?.image} width="550px" />

        <form
          className="flex flex-col w-[50%] gap-4 text-2xl pt-4"
          onSubmit={handleSubmit}
        >
          <h1>Create a New Post</h1>
          <label>Title</label>
          <input
            className="border-2 outline-none p-4 rounded-md"
            type="text"
            placeholder="title.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <input
            className="border-2 outline-none p-4 rounded-md h-44"
            type="text"
            placeholder="description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Image</label>
          <input
            className="border-2 outline-none p-4 rounded-md"
            type="text"
            placeholder="upload.."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Date</label>
          <input
            className="border-2 outline-none p-4 rounded-md"
            type="text"
            placeholder="date.."
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Author</label>
          <input
            className="border-2 outline-none p-4 rounded-md mb-2"
            type="text"
            placeholder="author.."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ToastContainer />
      </div>
    </Protected>
  );
}

export default page;
