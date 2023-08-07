"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/features/dataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(
    (state: RootState) => state.posts
  );
  console.log(data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }

  const postDisplay = data.slice(1, -2);

  return (
    <>
      <div className="bg-custom-sage w-full h-full ">
        <div className="flex justify-around p-8">
          <img src={data[0]?.image} width="500" />

          <div className="flex flex-col justify-center w-[50%] pl-8 gap-4">
            <h1 className="text-l font-semibold">{data[0]?.title}</h1>
            <h1 className="text-3xl">{data[0]?.description}</h1>
          </div>
        </div>
        <div className="bg-white ">
          <div className="pl-64 pr-64 pt-12">
            <p className="text-3xl text-teal-800 font-semibold flex justify-center items-center p-6">
              Recent Posts
            </p>
            <p className="pb-12 font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className="columns-3 gap-2">
            {postDisplay.map((post) => (
             
              
                <div className="p-4 m-6" key={post.id}>
                <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                  <img src={post.image} width="350px" className="" />
                  <h1 className="text-salmon-300 text-2xl mt-4 ">
                    {post.title}
                  </h1>
                  <h1 className="text-sm text-justify">
                    {post.description}
                  </h1>
                  </Link>
                </div>
              
              
            ))}
          </div>

          <div className="bg-stone-200 p-2 flex flex-col justify-between items-center h-auto gap-12">
            <div className="flex justify-around pt-12 pb-12 ">
              <img src={data[data.length - 2]?.image} width="500" />
              <div className="flex flex-col justify-center w-[40%] pl-8 gap-4">
                <h1 className="text-l font-semibold">
                  {data[data.length - 1]?.title}
                </h1>
                <h1 className="text-2xl">
                  {data[data.length - 1]?.description}
                </h1>
              </div>
            </div>

            <div className="relative flex flex-col justify-center mx-auto w-[80%] h-screen">
              <img
                src={data[data.length - 1]?.image}
                className="object-cover w-full h-full"
              />
              <div className="absolute text-white w-full text-center">
                <p className="text-3xl m-4 font-bold"> Get the low-down.</p>
                <p>
                  {" "}
                  Sign up with your email address to receive news and updates.{" "}
                </p>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="p-4 text-sm m-3 rounded-md "
                />
                <Link href="/signup">
                  <button className="bg-orange-300 p-4 text-sm m-3 rounded-md">
                    {" "}
                    Sign Up{" "}
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
