import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEye, FaLink } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

import { data } from "../assets/data";

const Projects = () => {
    const [items, setItems] = useState(data);

    console.log("data", data);

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <div>
            <section className="py-20 px-5 bg-green-800 grid grid-cols-1 gap-5 h-full sm:grid-cols-2 sm:h-full lg:grid-cols-3 lg:h-full">
                {items.map((item) => {
                    const { id, path, desc, link, github } = item;
                    return (
                        <div key={id}>
                            <img
                                src={path}
                                alt={path}
                                className="p-5 bg-green-500 rounded "
                            />
                            <h6 className="block text-center text-white font-semibold text-lg">
                                {desc}
                            </h6>
                            <div className="flex justify-center align-middle  flex-row mt-2">
                                <FaLink className="mr-4 w-7 h-7 cursor-pointer">
                                    <Link className="block text-center text-white font-semibold text-lg">
                                        {link}{" "}
                                    </Link>
                                </FaLink>
                                <FaGithub className="w-7 h-7 cursor-pointer">
                                    {github}
                                </FaGithub>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Projects;
