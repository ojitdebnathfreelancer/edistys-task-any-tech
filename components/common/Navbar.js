"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const commonLinkClasses =
    "text-lg capitalize relative after:absolute after:opacity-0 hover:after:opacity-100 link-transmission after:w-[150%] after:translate-x-[-20%] after:h-[1px] after:bottom-[-10px] after:left-0 after:bg-white-text";

  // handel navbar showing and hidden by scrolling
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 w-full z-[999999]">
      <div
        className={`fixed top-0 left-0 w-full z-[99999] lg:bg-transparent bg-blue-text transition-transform py-7 duration-300 lg:shadow-none shadow-button-primary-shadow ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="root-container flex items-center justify-between">
          <Link href={"/"} className="inline-block">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={500}
              className="h-7"
            />
          </Link>

          <ul className="lg:flex hidden items-center gap-x-16 text-white-text ">
            <li className="relative group">
              <button
                type="button"
                className="text-lg capitalize flex gap-x-3 items-center"
              >
                Solutions <FaChevronDown size={10} />
              </button>
              <ul className="absolute top-8 left-0 bg-white-text w-[300%] text-black rounded-md py-1 group-hover:block hidden">
                <li className="border-b border-black/10 py-3">
                  <Link href={"/"} className="text-lg capitalize p-5">
                    AnyCaaS
                  </Link>
                </li>
                <li className="border-b border-black/10 pb-3">
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
            </li>
            <li>
              <Link href={"/"} className={commonLinkClasses}>
                Services
              </Link>
            </li>
            <li>
              <Link href={"/"} className={commonLinkClasses}>
                About us
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="outline-none border border-white rounded-full flex items-center gap-x-3 py-2 px-3"
              >
                <GrLanguage size={15} />
                EN <FaChevronDown size={10} />
              </button>
            </li>
          </ul>

          <div className="lg:block hidden">
            <button
              type="button"
              className="outline-none border border-white rounded-md flex items-center duration-300 gap-x-3 py-3 px-5 capitalize text-white-text font-bold text-xl hover:text-blue-text hover:bg-white-text hover:shadow-button-primary-shadow"
            >
              Contact us <IoIosArrowForward size={15} className="" />
            </button>
          </div>

          <button
            onClick={() => setIsOpenSidebar(isOpenSidebar ? false : true)}
            type="button"
            className="lg:hidden block"
          >
            {isOpenSidebar ? (
              <RxCross2 size={25} className="text-white-text" />
            ) : (
              <LuMenu size={25} className="text-white-text" />
            )}
          </button>
        </nav>
      </div>
      <div
        className={`absolute ${isVisible ? "top-20" : "top-0"}  duration-300 ${
          isOpenSidebar ? "left-[0%]" : "left-[-100%]"
        } z-[9999] w-full bg-blue-text p-5 lg:hidden block`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
