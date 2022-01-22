import React from "react";

const Describtion = (props) => {
  return (
    <div className="py-4">
      <div className="px-2 flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version={1.0}
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          className="w-7 h-7  cursor-pointer transform hover:translate-y-1 duration-300 inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg"
        >
          <path
            clipRule="evenodd"
            d="M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.179.8.146 1.052-.328 1.052-.752 0-.38.008-1.442 0-2.777-4.449.967-5.371-2.107-5.371-2.107-.727-1.848-1.775-2.34-1.775-2.34-1.452-.992.109-.973.109-.973 1.605.113 2.451 1.649 2.451 1.649 1.427 2.443 3.743 1.737 4.654 1.329.146-1.034.56-1.739 1.017-2.139-3.552-.404-7.286-1.776-7.286-7.906 0-1.747.623-3.174 1.646-4.292-.165-.404-.715-2.031.157-4.234 0 0 1.343-.43 4.398 1.641a15.31 15.31 0 0 1 4.005-.538c1.359.006 2.727.183 4.005.538 3.055-2.07 4.396-1.641 4.396-1.641.872 2.203.323 3.83.159 4.234 1.023 1.118 1.644 2.545 1.644 4.292 0 6.146-3.74 7.498-7.304 7.893C19.479 23.548 20 24.508 20 26v4.428c0 .428.258.901 1.07.746C27.422 29.055 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z"
            fill="#ffffff"
            fillRule="evenodd"
            className="fill-181616"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.693 56.693"
          xmlSpace="preserve"
          className="w-7 h-7  cursor-pointer transform hover:translate-y-1 duration-300 inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg"
        >
          <path
            d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"
            fill="#ffffff"
            className="fill-000000"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          className="w-7 h-7  cursor-pointer transform hover:translate-y-1 duration-300 inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg"
        >
          <path
            d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z"
            fill="#ffffff"
            className="fill-000000"
          />
          <ellipse
            cx="6.5"
            cy="6.5"
            rx="1.55"
            ry="1.5"
            fill="#ffffff"
            className="fill-000000"
          />
        </svg>
        <div className="px-3 py-1 cursor-pointer flex items-center  text-base font-bold text-slate-200 bg-slate-600 hover:bg-slate-700  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="pl-2 sm:text-sm">
            Morooco , Rabat
            <div className="w-2 h-2 ml-2 hidden bg-gray-400 dark:bg-white md:inline-block rounded-full overflow-hidden"></div>{" "}
          </div>
        </div>
      </div>
      <div className="box-border">
        <h1 className="py-4 font-bold text-4xl">
          Hey, I'm{" "}
          <span className="underline decoration-wavy underline-offset-8 text-indigo-500 dark:text-sky-100 decoration-indigo-700">
            Mouad Amzil
          </span>{" "}
          ✌️
        </h1>
        <p className="pargh">
          I'm a ~ 21.21648 year old software engineer from the Morocco. I'm
          interested in full stack web development including large scale
          frontend applications and performant serverside code
        </p>
      </div>
    </div>
  );
};

export default Describtion;
