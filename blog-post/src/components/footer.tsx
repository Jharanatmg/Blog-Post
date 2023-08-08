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
    <div className="w-full mx-auto mt-auto text-xl pb-12 pt-12">
      <h1 className="ml-12 text-2xl">Stanton</h1>

      <div className=" ml-12 flex justify-between mt-2 text-sm">
        <h1>Copyright 2023. Powered by "K & J"</h1>
        <ul className="flex w-24 justify-around">
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
        <div className="flex justify-between mr-12">
          <ul className="flex justify-around w-24">
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
