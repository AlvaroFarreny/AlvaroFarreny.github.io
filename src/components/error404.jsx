import React from "react";
import { Link } from "react-router-dom";

const error404 = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300 mt-5 mb-5 font-inter">
      <div className="text-center mt-3 ">
        <h2 className="text-4xl mb-2">Not found</h2>
        <p className="">The page you're looking for was not found.</p>
        <hr className="w-[31rem] h-1 mx-auto my-4 bg-slate-400 border-0 rounded md:my-7 dark:bg-gray-700"></hr>
        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-black dark:text-white px-3 py-1 border-2 border-stone-900 dark:border-white rounded-md "
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default error404;
