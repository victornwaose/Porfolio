import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-700  fixed w-full p-2 ">
            <header className="flex justify-between align-middle w-4/5 ml-auto mr-auto mt-4 relative pb-2  text-white">
                <div className="logo">
                    <h1 className="  text-lg lg:text-3xl md:text-3xl">
                        <Link to="/">Victor</Link>
                    </h1>
                </div>
                <nav>
                    <ul className="flex">
                        <li className="ml-5  text-lg lg:text-3xl md:text-3xl">
                            <Link to="/"> Home</Link>
                        </li>
                        <li className="ml-3  text-lg lg:text-3xl md:text-3xl">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="ml-3  text-lg lg:text-3xl md:text-3xl">
                            <Link
                                to="/hire"
                                className=" bg-green-500 p-1 rounded-full font-semibold hover:bg-green-800"
                            >
                                {" "}
                                Hire Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
