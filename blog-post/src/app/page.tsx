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
  
    const postDisplay=data.slice(1,-1)

  
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
          <div className="grid grid-cols-3 gap-4 m-6">
            {postDisplay.map((post) => (
              <ul>
                <li className="" key={post.id}>
                  <img src={post.image} width="350px" />
                  <h1 className="text-green-900 text-2xl pb-3 pt-3">
                    {post.title}
                  </h1>
                  <h1 className="text-xs text-justify pr-12">
                    {post.description}
                  </h1>
                </li>
              </ul>
            ))}
          </div>
          <div className="flex justify-center bg-custom-sage w-full">
            <div className="h-96">
              <img src={data[data.length-1]?.image} />
              <div className="flex flex-col justify-center items-center">
              <img src={data[0]?.image} width='500' />
                <p className="text-2xl m-4"> Get the low-down.</p>
                <p>
                  {" "}
                  Sign up with your email address to receive news and updates.{" "}
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="pl-6 pr-24 pt-6 pb-6 text-xs m-3 "
                  />
                  <Link href="/signup">
                    <button className="bg-orange-300 p-6 text-xs m-3">
                      {" "}
                      Sign Up{" "}
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
