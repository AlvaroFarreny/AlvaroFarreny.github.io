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
    </div>
  );
}

export default Portfolio;
