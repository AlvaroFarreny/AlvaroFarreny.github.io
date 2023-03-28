import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-stone-900 dark:text-white text-center ">
        Some of my projects
      </h2>
      <div className="relative border-t border-slate-400 dark:border-slate-700 mb-5" />
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
      <div className="text-center mt-4">
        <Link
          to="/projects"
          className="text-black dark:text-white px-3 py-1 border-2 border-stone-900 dark:border-white rounded-md "
        >
          All my projects
        </Link>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-1 text-stone-900 dark:text-white text-center">
          My Skills
        </h2>
        <div className="relative border-t border-slate-400 dark:border-slate-700" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-2 ">
        <div className="grid mt-4 grid-cols-4 sm:grid-cols-7 md:grid-cols-7  lg:grid-cols-7 gap-4">
          <img title="Github" src="https://skillicons.dev/icons?i=github" />
          <img title="Python" src="https://skillicons.dev/icons?i=py" />
          <img title="PyQt" src="https://skillicons.dev/icons?i=qt" />
          <img title="Java" src="https://skillicons.dev/icons?i=java" />
          <img title="Eclipse" src="https://skillicons.dev/icons?i=eclipse" />
          <img title="React" src="https://skillicons.dev/icons?i=react" />
          <img title="Tailwind" src="https://skillicons.dev/icons?i=tailwind" />
          <img title="Javascript" src="https://skillicons.dev/icons?i=js" />
          <img title="PHP" src="https://skillicons.dev/icons?i=php" />
          <img title="MySQL" src="https://skillicons.dev/icons?i=mysql" />
          <img
            title="Visual Studio Code"
            src="https://skillicons.dev/icons?i=vscode"
          />
          <img title="Figma" src="https://skillicons.dev/icons?i=figma" />
          <img
            title="Adobe Illustrator"
            src="https://skillicons.dev/icons?i=ai"
          />
          <img
            title="Adobe Photoshop"
            src="https://skillicons.dev/icons?i=ps"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
