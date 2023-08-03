import React from "react";
import Link from "next/link";

function navbar() {
  return <div className="flex w-full justify-between p-4">
    <ul>
      <li>Stanton</li>
    </ul>
    <ul className='flex w-96 justify-between'>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
      <li>Shop</li>
      <li><Link href="/newpost">Create New post</Link></li>
      <li>Login</li>
    </ul>
  </div>;
}

export default navbar;
