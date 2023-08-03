import React from "react";

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
      <li>Create New post</li>
      <li>Login</li>
    </ul>
  </div>;
}

export default navbar;
