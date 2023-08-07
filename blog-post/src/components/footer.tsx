import React from "react";
import { AiFillFacebook, AiOutlineFacebook } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-xl w-full p-8 bg-stone-100 pt-10">
      <h1 className="ml-4 text-3xl">Stanton</h1>

      <div className="flex w-full justify-between text-sm p-4">
        <h1>Copyright 2023. Powered by "K & J"</h1>
        <ul className="flex w-32 justify-around">
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsLinkedin />
          </li>
        </ul>
        <div className="ml-4 flex justify-between">
          <ul className="flex justify-around w-32">
            <li>
              <FaCcPaypal />
            </li>
            <li>
              <FaCcMastercard />
            </li>
            <li>
              <FaCcDiscover />
            </li>
            <li>
              <FaCcVisa />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
