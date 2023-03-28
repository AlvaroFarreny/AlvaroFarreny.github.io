import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-slate-400 dark:border-slate-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-slate-900 dark:bg-slate-700" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-slate-900 bg-slate-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-slate-500 dark:text-slate-400">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
