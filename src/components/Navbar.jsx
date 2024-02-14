import { useState } from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    console.log("clicked");
    setOpen(!open);
  };
  return (
    <nav className="flex items-center px-9 py-3 shadow-lg">
      <div className="mr-[5%]">
        <h1 className=" text-2xl text-amber-500 whitespace-nowrap font-bold">
          VEGAN CLUB
        </h1>
      </div>
      <div className=" border-r-4 h-8 border-r-gray-600 mr-[2%] hidden md:block" />
      <div className="mr-auto hidden md:block">
        <ul className="flex lg:gap-9 md:gap-7 xl:gap-20">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">PROMOS</a>
          </li>
          <li>
            <a className="whitespace-nowrap" href="">
              ABOUT US
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex gap-7 hidden">
        <CiTwitter className="social" />
        <CiInstagram className="social" />
        <CiFacebook className="social" />
      </div>
      <div className="ml-auto text-2xl text-orange-400 md:hidden">
        <FaHamburger role="button" onClick={openMenu} />
      </div>
      {open && (
        <div
          onClick={openMenu}
          className="bg-black absolute top-0 right-0 left-0 h-screen opacity-90 transition-all flex flex-col gap-6 justify-center items-center"
        >
          <ul className=" flex flex-col gap-3 items-center justify-center">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">MENU</a>
            </li>
            <li>
              <a href="">PROMOS</a>
            </li>
            <li>
              <a className="whitespace-nowrap" href="">
                ABOUT US
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <CiTwitter className="social" />
            <CiInstagram className="social" />
            <CiFacebook className="social" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
