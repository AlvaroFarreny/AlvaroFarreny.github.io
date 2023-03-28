import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <Link
          to="/projects"
          className="text-black dark:text-white px-3 py-1 border-2 border-stone-900 dark:border-white rounded-md "
        >
          All my projects
        </Link>
      </div>
      <div className="mt-20">
        <center>
          <img
            className=""
            src="https://skillicons.dev/icons?i=github,py,qt,java,eclipse,react,tailwind,js,vite,php,mysql,vscode,figma,ai,ps"
          />
        </center>
      </div>
      <div className="mt-5">
        <div className="relative border-t border-slate-400 dark:border-slate-700" />
        <h2 className="text-2xl font-bold mb-5 text-stone-900 dark:text-white text-center">
          My Skills
        </h2>
      </div>
    </div>
  );
}

export default Portfolio;
