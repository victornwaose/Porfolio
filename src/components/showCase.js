import React from "react";
import { Link } from "react-router-dom";

const ShowCase = () => {
    return (
        <>
            <section className="showcase">
                <div className="overlay flex  flex-col items-center justify-center text-white">
                    <h1 className="text-2xl font-semibold text-right mb-7 lg:text-center lg:px-56  lg:text-7xl">
                        I create{" "}
                        <span className="text-green-500"> Website</span> for
                        small and large business
                    </h1>
                    <div className="ml-auto lg:ml-0">
                        <Link
                            to="/hire"
                            className=" bg-green-500 p-2 px-4 rounded-full font-semibold hover:bg-green-800"
                        >
                            {" "}
                            Get Started
                        </Link>
                        <Link
                            to="/project"
                            className="bg-white text-green-500 p-2 px-4 rounded-full font-semibold ml-3 hover:bg-green-500 hover:text-white"
                        >
                            {" "}
                            projects
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShowCase;
