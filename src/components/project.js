import React, { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const Projects = () => {
    const [items, setItems] = useState(data);
    return (
        <div>
            <section className="py-20 px-5 bg-green-800 grid grid-cols-1 gap-5 h-full sm:grid-cols-2 sm:h-full lg:grid-cols-3 lg:h-full">
                {items.map((item) => {
                    const { id, path, desc, link } = item;
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
                            <Link className="block text-center text-white font-semibold text-lg">
                                {link}{" "}
                            </Link>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Projects;
