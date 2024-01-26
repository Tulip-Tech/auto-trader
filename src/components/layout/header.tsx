import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const menuItems = [
  {
    text: "Northampton",
    href: "/",
  },
  {
    text: "Syston",
    href: "/syston",
  },
];

const HeaderComponent = () => {
  return (
    <div className="border-b  bg-white">
      <div className="flex justify-between max-w-[1550px] p-5 mx-auto  ">
        <div className="flex justify-between lg:gap-10">
          <Image
            src="/header/B&F-03.svg"
            alt="logo"
            width={170}
            height={100}
          ></Image>
          <ul className="flex gap-5 text-sm font-bold text-slate-700 mt-2 ml-5">
            {menuItems.map((item, index) => (
              <li key={index} role="menuitem" className="mt-5 ">
                <Link
                  href={item.href}
                  className="hover:bg-orange-500 hover:text-white p-2 transition-all duration-500 rounded-full hover:font-medium"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
