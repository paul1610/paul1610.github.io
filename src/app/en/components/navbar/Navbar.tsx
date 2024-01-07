import React from "react";
import Link from "next/link";

export default function Navbar ({ toggle }: { toggle: () => void }) {
    return (
        <>
            <div className="nav-zindex w-full h-20 sticky top-0 bg-white">
                <div className="container h-full">
                    <div className="flex justify-between items-center h-full">
                        <h3>
                            <a href={"/"}>
                                <b>Nell Paul</b>
                            </a>
                        </h3>
                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                            onClick={toggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#000"
                                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                        <ul className="hidden md:flex gap-x-6">
                            <li>
                                <a href="/en#about">
                                    <p>About me</p>
                                </a>
                            </li>
                            <li>
                                <a href="/en#projects">
                                    <p>Projects</p>
                                </a>
                            </li>
                            <li>
                                <a href="/en#services">
                                    <p>Services</p>
                                </a>
                            </li>
                            <li>
                                <a href="/en#contact">
                                    <p>Contact</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}