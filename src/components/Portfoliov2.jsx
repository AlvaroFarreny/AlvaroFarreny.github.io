import React from "react";
import { Link } from "react-router-dom";

const Portfoliov2 = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">
        My recent projects
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
            <button>Github</button>
            <p>Used Languages</p>
          </div>
        </div>
        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 ">
          <img
            src="public\assets\criptoclub.png"
            alt="..."
            className="max-w-full rounded-lg shadow-xl"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
            }}
          ></img>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-48 ">
          <img
            src="public\assets\criptoclub.png"
            alt="..."
            className="max-w-full rounded-lg shadow-xl"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
            }}
          ></img>
        </div>
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
            <button>Github</button>
            <p>Used Languages</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
            <button>Github</button>
            <p>Used Languages</p>
          </div>
        </div>
        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-48 ">
          <img
            src="public\assets\criptoclub.png"
            alt="..."
            className="max-w-full rounded-lg shadow-xl"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
            }}
          ></img>
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          to="/projects"
          className="text-black dark:text-white px-3 py-1 border-2 border-stone-900 dark:border-white rounded-md "
        >
          All my projects
        </Link>
      </div>
    </div>
  );
};

export default Portfoliov2;
