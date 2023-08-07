"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchPosts } from "@/redux/features/dataSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [useremail, setUseremail] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    setUseremail(userEmail || "");
  }, []);
  console.log(useremail);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("session-token");
    localStorage.removeItem("email");
    setUseremail("");
    router.push("/");
  };
  const handlenewpost = () => {
    const token = localStorage.getItem("session-token");
    if (token) {
      router.push("/newpost");
    } else {
      toast.error("please login to post a new post.");
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  interface Content {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
  }

  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(
    (state: RootState) => state.posts
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState<Content[]>([]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filter = data.filter((Content: { title: string }) =>
      Content.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filter);
  };

  return (
    <>
      <div className="flex w-full h-full bg-custom-sage justify-between items-center p-4">
        <ul>
          <li className="text-4xl">Stanton</li>
        </ul>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
            className="flex justify-center items-center bg-slate-900/30 p-1 rounded-md backdrop-blur-sm  text-black"
          />
        </div>
        <div className="bg-slate-900/30  rounded-md backdrop-blur-sm absolute top-16 left-44">
          {filterData.map((content: Content, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-sm dark:bg-slate-900/60"
            >
              <div className="m-1">
                <a className="text-base font-bold hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                  {content.title}
                </a>
              </div>
            </div>
          ))}
        </div>
        <ul className="flex justify-between w-[60%] p-2 text-sm">
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>

          <button className=" hover:font-semibold " onClick={handlenewpost}>
            Create New post
          </button>
          {useremail ? (
            <>
              <div className="relative">
                <FaUserCircle size={26} onClick={handleOpen} />
                {open && (
                  <div className="absolute top-10 right-1 bg-white p-2 border-2">
                    <li>{useremail}</li>

                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button>
              <Link href="/signin">Login</Link>
            </button>
          )}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default Navbar;
