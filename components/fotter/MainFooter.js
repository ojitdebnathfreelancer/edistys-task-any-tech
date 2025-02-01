import React from "react";
import Copyright from "./Copyright";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const MainFooter = () => {
  return (
    <>
      <div className="bg-footer-bg border-t border-white/20">
        <div className="root-container py-14 flex justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt="logo"
              width={250}
              height={500}
              className="h-10"
            />
          </Link>

          <div className="lg:flex hidden items-center gap-5 text-footer-text">
            <p className="text-lg capitalize border-r border-blue-text2 py-3 px-7">
              Our Solutions
            </p>
            <ul className="flex gap-5 items-center">
              <li className="">
                <Link
                  href={"/"}
                  className="text-lg capitalize hover:text-blue-text duration-300"
                >
                  AnyCaaS
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className="text-lg capitalize hover:text-blue-text duration-300"
                >
                  AnyBaaS
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/"}
                  className="text-lg capitalize hover:text-blue-text duration-300"
                >
                  AnyPaaS
                </Link>
              </li>
            </ul>
          </div>

          <ul className="lg:hidden flex gap-x-5 items-center">
            <li>
              <Link href="/">
                <FaLinkedin size={25} className="text-blue-text" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IoCall size={25} className="text-blue-text" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <MdEmail size={25} className="text-blue-text" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default MainFooter;
