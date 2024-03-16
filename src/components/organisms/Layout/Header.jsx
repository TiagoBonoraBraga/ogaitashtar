import CustomLogo from "@/components/atoms/CustomLogo";
import { useState } from "react";
import Link from 'next/link';
import ThemeToggle from "@/components/atoms/ThemeToggle";


export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <header className="h-16 bg-white-500 dark:bg-black-500 w-[100%] z-50 fixed  top-0 ss:fixed ss:z-50 ">
                <nav className="w-full shadow-lg  ">
                    <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block ss:flex ss:flex-row">
                                <CustomLogo title="Ogait Ashtar" />
                                <div className="md:hidden">
                                    <button
                                        className="flex flex-row justify-center items-center gap-5 text-black-500 rounded-md outline-none"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        <div>
                                            <ThemeToggle />
                                        </div>
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black-500 dark:text-white-500"
                                                viewBox="0 0 20 20"
                                                fill="white"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black-500 dark:text-white-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div
                                className={`flex-1 md:block  bg-white-500 dark:bg-black-500  dark:text-black-500 ${navbar ? "block" : "hidden"
                                    }`}
                            >



                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                                    <li className="text-black-500 dark:text-white-500 hover:text-black-500 hover:text-lg ss:text-white-500 ss:hover:text-white-500 ss:hover:text-lg">
                                        <Link href="/" prefetch={false}>Home</Link>
                                    </li>
                                    <li className="text-black-500 dark:text-white-500 hover:text-black-500 hover:text-lg ss:text-white-500 ss:hover:text-white-500 ss:hover:text-lg">
                                        <Link href="/productions" prefetch={false}>Discografia</Link>
                                    </li>
                                    <li className="text-black-500 dark:text-white-500 hover:text-black-500 hover:text-lg ss:text-white-500 ss:hover:text-white-500 ss:hover:text-lg">
                                        <Link href="/gallery" prefetch={false}>Fotos</Link>
                                    </li>
                                    <li className="text-black-500 dark:text-white-500 hover:text-black-500 hover:text-lg ss:text-white-500 ss:hover:text-white-500 ss:hover:text-lg">
                                        <Link href="/" prefetch={false}>Tiago Dev</Link>
                                    </li>
                                    <li className="text-black-500 dark:text-white-500 hover:text-black-500 hover:text-lg ss:text-white-500 ss:hover:text-white-500 ss:hover:text-lg">
                                        <Link href="/contact" prefetch={false}>Contato</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="sx:hidden" >
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};


