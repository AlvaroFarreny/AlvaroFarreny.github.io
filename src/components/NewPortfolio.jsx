import React from "react";
import newportfolio from "../data/projectshomepage";
import NewPortfolioItem from "./NewPortfolioItem";
import { Link } from "react-router-dom";

const NewPortfolio = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {newportfolio.map((project) => (
        <NewPortfolioItem
          id={project.id}
          imgUrl={project.imgUrl}
          title={project.title}
          stack={project.stack}
          link={project.link}
          description={project.description}
          subtitle={project.subtitle}
        />
      ))}
      <div className="underline underline-offset-4 decoration-1 flex justify-center ">
        <Link
          to="/projects"
          className="text-black dark:text-white -mt-10 underline underline-offset-4 decoration-1 flex gap-1"
        >
          See all my creations!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-4 h-4 fill-current mt-1"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewPortfolio;
