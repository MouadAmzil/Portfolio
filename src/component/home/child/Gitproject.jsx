import React, { Fragment, useReducer } from "react";

function Gitproject({ value }) {
  const [isOpen, changeWidth] = useReducer((x) => !x, false);

  return (
    <>
      <div
        style={{ height: isOpen ? "auto" : "54px" }}
        className="flex overflow-hidden relative flex-col text-blue-900/80 dark:text-gray-100 no-underline dark:hover:bg-white/10 bg-gradient-to-tr from-blue-100 dark:from-white/5 to-blue-700/5 dark:to-white/5 rounded-md dark:border border-white/10 md:rounded-lg"
        onClick={changeWidth}
      >
        <button className="cursor-pointer flex font-bold text-base px-3 py-4">
          <div className="flex-1">
            <h1 className="text-left">Portfolio</h1>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition duration-700  ease-in-ou"
              style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
        <div className=" border-t-2 border-white/30 px-3 py-4 space-y-4">
          <p>{value}</p>
          <a
            href="http://www.google.com"
            className="inline-flex items-center py-2 px-6 space-x-2 text-white no-underline bg-blue-700 dark:bg-white/10 rounded-full transition-transform duration-500 hover:scale-95 select-none"
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default Gitproject;
