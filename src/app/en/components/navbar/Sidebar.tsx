import Link from "next/link";
import React, {useEffect} from "react";

export default function Sidebar ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void; }): JSX.Element {
    return (
        <>
            <div
                className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                    </svg>
                </button>

                <ul className="sidebar-nav text-center leading-relaxed text-xl">
                    <li>
                        <a href="/en#about" onClick={toggle}>
                            <p>About me</p>
                        </a>
                    </li>
                    <li>
                        <a href="/en#services" onClick={toggle}>
                            <p>Services</p>
                        </a>
                    </li>
                    <li>
                        <a href="/en#projects" onClick={toggle}>
                            <p>Projects</p>
                        </a>
                    </li>
                    <li>
                        <a href="/en#contact" onClick={toggle}>
                            <p>Contact</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}