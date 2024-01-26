import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const menuItems = [
    {
        text: "Northampton",
        href: "/northampton",
    },
    {
        text: "Syston",
        href: "/syston",
    },
];

const HeaderComponent = () => {
    const { query } = useRouter()

    return (
        <div className="border-b bg-white px-20">
            <div className="flex justify-between">
                <div className="flex justify-between lg:gap-10">
                    <Link href="/">
                        <Image
                            src="/header/B&F-03.svg"
                            alt="logo"
                            width={170}
                            height={100}
                        />
                    </Link>
                    <ul className="flex gap-5 text-sm font-bold text-slate-700 mt-2 ml-5">
                        {menuItems.map((item, index) => (
                            <li key={index} role="menuitem" className="mt-5 ">
                                <Link
                                    href={item.href}
                                    className={`hover:bg-primary hover:text-white p-2 transition-all duration-500 rounded-md hover:font-medium ${item.href === `/${query.slug}` ? 'bg-primary text-white' : ''}`}
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
