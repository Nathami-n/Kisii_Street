import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between px-4 items-center bg-primary bg-opacity-90">
      <img className="w-[80px] h-[80px]" src="/public/logo.png" />
      <div className="text-white">
      <FiAlignJustify className="cursor-pointer text-5xl" onClick={()=> setOpen(!open)}/>
        <ul className="md:flex gap-5 sm:hidden">
          <li className="link_hover ">
            <a href="#">Home</a>
          </li>
          <li>
            <a className="link_hover" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="link_hover" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {
        open && (
            <div className="fixed top-0 h-[100%] left-0 w-[100%] bg-black bg-opacity-80 ">
                 <ul className="flex flex-col gap-5 justify-center items-center h-full ">
          <li className="link_hover ">
            <a href="#">Home</a>
          </li>
          <li>
            <a className="link_hover" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="link_hover" href="#">
              Contact
            </a>
          </li>
        </ul>
            </div>
        )
      }
    </div>
  );
};

export default Navbar;
