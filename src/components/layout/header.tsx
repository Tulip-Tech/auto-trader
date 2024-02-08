import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { IoMdClose, IoMdMenu } from "react-icons/io";

const leftMenuItems = [
    {
        text: "All Cars",
        href: "/",
    },
    {
        text: "Northampton",
        href: "/northampton",
    },
    {
        text: "Syston",
        href: "/syston",
    },
];
const rightMenuItems = [
    {
        text: "Part Exchange",
        href: "/part-exchange",
    },
    {
        text: "AA Cars Standards",
        href: "/aa-cars-standards",
    },
    {
        text: "Contact Us",
        href: "/contact-us",
    },
];

const HeaderComponent = () => {
    const { query, pathname } = useRouter()
    const [open, setOpen] = React.useState(false);

    return (
        <div className="fixed top-0 left-0 z-[9999] w-full bg-white shadow-md">
            <div className="flex px-6 md:px-20 items-center justify-between w-full py-8 md:py-1 h-14 xl:h-16">
                <div className="flex items-center h-full">
                    <div className="flex items-center text-2xl font-bold text-gray-800 cursor-pointer select-none">
                        <Link href="/">
                            <Image
                                priority
                                src="/footer/B&F-03.png"
                                alt="logo"
                                width={170}
                                height={100}
                            />
                        </Link>
                    </div>
                    <ul className="hidden md:flex items-center ml-4">
                        {leftMenuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`ml-4 text-xl font-semibold hover:text-primary ${(pathname === '/[slug]' && `/${query?.slug}` == item.href || pathname === item.href) ? 'text-primary' : ''}`}
                            >
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center">
                        {rightMenuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`ml-4 text-base font-medium hover:text-primary ${pathname == item.href ? 'text-primary' : ''}`}
                            >
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-end md:hidden">
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl cursor-pointer"
                    >
                        {open ? <IoMdClose/> : <IoMdMenu/>}
                    </div>
                </div>
                {open && (
                    <div className="absolute right-0 mt-16 mr-4 md:hidden top-1">
                        <ul className="bg-white shadow-md">
                            {[...leftMenuItems, ...rightMenuItems].map((item, index) => (
                                <li key={index} className="p-2 hover:text-primary">
                                    <Link href={item.href} onClick={() => setOpen(false)}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderComponent;
