import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="flex justify-between py-1 px-5 absolute w-full  text-white">
                <div className="logo">
                    <h1 className="text-3xl">
                        <Link to="/">VickXY</Link>
                    </h1>
                </div>
                <nav>
                    <ul className="flex">
                        <li className="mr-5">
                            <Link to="/"> Home</Link>
                        </li>
                        <li className="mr-5">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="mr-5">
                            <Link
                                to="/hire"
                                className=" bg-green-500 p-2 px-4 rounded-full font-semibold hover:bg-green-800"
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
