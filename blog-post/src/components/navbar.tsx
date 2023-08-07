"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";

function navbar() {
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
  return (
    <>
      <div className="flex w-full h-full bg-custom-sage justify-between items-center p-4">
        <ul>
          <li className="text-3xl">Stanton</li>
        </ul>

        <ul className="flex justify-between w-[60%] p-2 text-sm">
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>Shop</li>
          <button onClick={handlenewpost}>Create New post</button>
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

export default navbar;
