import React from "react";

function NewPortfolioItem({
  id,
  title,
  imgUrl,
  subtitle,
  description,
  link,
  stack,
}) {
  const isFirstImage = id === 1;
  const isEven = (id - 1) % 2 === 0;
  const imageAlignmentClass =
    isFirstImage && !isEven ? "order-1" : isEven ? "order-2" : "order-1";

  return (
    <div
      className={`flex flex-row gap-10 mb-20 ${
        isEven ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-96 h-[30rem] bg-white flex justify-center items-center flex-shrink-0 overflow-hidden ${imageAlignmentClass}`}
      >
        <div className="transform scale-150">
          <img src={imgUrl} alt="Life++ Project" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-left -mt-10">
        <h3 className="text-lg font-semibold my-2 dark:text-blue-200 text-blue-500 uppercase tracking-widest">
          {subtitle}
        </h3>
        <h2 className="text-3xl font-bold my-2 text-stone-900 dark:text-white">
          {title}
        </h2>
        <div className="space-x-2 my-4">
          {stack.map((item, index) => (
            <span key={index} className="badge badge-primary px-5 py-3">
              {item}
            </span>
          ))}
        </div>
        <p className="mb-5 mt-1">{description}</p>
        <a href={link} className="flex flex-row gap-2">
          View project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-4 h-4 fill-current mt-1"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default NewPortfolioItem;
