"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <div>
      <ul className="text-white-text flex flex-col gap-y-5">
        <li className="relative group">
          <button
            type="button"
            onClick={() => setIsOpenSubMenu(isOpenSubMenu ? false : true)}
            className="text-lg capitalize flex gap-x-3 items-center"
          >
            Solutions <FaChevronDown size={10} />
          </button>
          {isOpenSubMenu && (
            <ul className="pl-4 flex flex-col gap-y-4 my-3">
              <li className="">
                <Link href={"/"} className="text-lg capitalize p-5">
                  AnyCaaS
                </Link>
              </li>
              <li className="">
                <Link href={"/"} className="text-lg capitalize p-5">
                  AnyBaaS
                </Link>
              </li>
              <li className="">
                <Link href={"/"} className="text-lg capitalize p-5">
                  AnyPaaS
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href={"/"}>Services</Link>
        </li>
        <li>
          <Link href={"/"}>About us</Link>
        </li>
      </ul>

      <button
        type="button"
        className="outline-none border my-0 mx-auto text-white-text border-white/10 mt-10 rounded-full flex items-center gap-x-3 py-2 px-3"
      >
        <GrLanguage size={15} />
        ENGLISH <FaChevronDown size={10} />
      </button>

      <button
        type="button"
        className="outline-none border w-full text-center mt-10 border-white rounded-md flex items-center duration-300 gap-x-3 py-3 px-5 capitalize text-white-text font-bold text-xl hover:text-blue-text hover:bg-white-text hover:shadow-button-primary-shadow"
      >
        Contact us <IoIosArrowForward size={15} className="" />
      </button>
    </div>
  );
};

export default Sidebar;
