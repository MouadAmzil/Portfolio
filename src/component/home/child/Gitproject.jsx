import React, { useReducer } from "react";

function Gitproject({ repo, stars, forks, description, link }) {
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
            <h1 className="text-left">
              {repo}{" "}
              <span className="space-x-2">
                <span className="space-x-1">
                  <span>⭐</span>
                  <span>{stars}</span>
                </span>
                <span className="space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span>{forks}</span>
                </span>
              </span>
            </h1>
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
        <div className="flex flex-col h-full border-t-2 border-white/30 px-3 py-4 space-y-4">
          <p className="flex-1">
            {String(description) === "undefined"
              ? "Opss ,No Description"
              : description}
          </p>
          <a
            href={link}
            target='{"_blank"}'
            className="inline-flex w-fit items-center py-2 px-6 space-x-2 text-white no-underline bg-blue-700 dark:bg-white/10 rounded-full transition-transform duration-500 hover:scale-95 select-none"
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default Gitproject;
