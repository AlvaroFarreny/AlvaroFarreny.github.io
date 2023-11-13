import React from "react";

const Fitfoods = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 z-0">
        <div className="mb-24">
          <img
            src="../assets/fitfoodsexpanded.png"
            className="w-full h-full object-cover lazyload"
            alt="Life++ Background"
          />
        </div>
      </div>
      <div className="z-[9] relative p-4 -ml-32 md:mt-44 mt-20">
        <h1 className="text-black text-3xl font-bold">FitFoods</h1>
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold mt-10">Role</h2>
          <p className="text-black">Designer & Developer</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Duration</h2>
          <p className="text-black">4 months</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Team</h2>
          <ul>
            <li className="text-black">Adrián Díaz</li>
            <li className="text-black">Juan Carlos Jiménez</li>
            <li className="text-black">Crishina Ruiz</li>
          </ul>
        </div>
      </div>
      <div className="z-[9] relative mt-44 mb-[180px] flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
          fill="black"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      <div className="grid grid-cols-2 mb-28">
        <div className="">
          <h2 className="text-3xl font-bold my-2 text-stone-900 dark:text-white">
            Final project <br />
            Computer Science
          </h2>
          <h3 className="mb-4">February 2023 - June 2023</h3>
          <h3 className="font-semibold text-md">Technologies</h3>
          <div className="grid mt-2 grid-cols-4 sm:grid-cols-7 md:grid-cols-7  lg:grid-cols-7 gap-4 mb-4">
            <img title="Laravel" src="https://skillicons.dev/icons?i=laravel" />
            <img title="React" src="https://skillicons.dev/icons?i=react" />
            <img title="VSCode" src="https://skillicons.dev/icons?i=vscode" />
          </div>
          <a
            href="https://github.com/AlvaroFarreny/fitfoods"
            className="font-mono flex flex-row items-center text-stone-900 dark:text-white hover:underline hover:underline-offset-2"
          >
            Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="ml-2"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </a>
        </div>
        <div className="-ml-10 mr-10">
          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
            Discover an innovative way to take charge <br /> of your health with
            FitFoods!
          </h3>
          <p>
            FitFoods is a fitness application designed for individuals who enjoy
            exercising and leading a healthy lifestyle. With FitFoods, users can
            access a section that recommends the best exercises based on the
            muscles they want to target, providing customized workout routines
            for each specific area of the body.
          </p>
          <br></br>
          <p>
            Furthermore, FitFoods offers a healthy meal recommender, assisting
            users in maintaining a balanced diet and adopting a healthy
            lifestyle. The application also features an exercise ranking system,
            utilizing sentiment analysis from user comments to showcase the most
            popular and highly rated exercises.
          </p>
          <br></br>
          <p>
            With FitFoods, users gain access to comprehensive information and
            tools to achieve their health and fitness goals.
          </p>
          <br></br>
          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
            PROJECT OBJECTIVES
          </h3>
          <p>
            The primary objectives of FitFoods are to provide users with
            exercises tailored to their desired muscle groups and offer meal
            plans adjusted to their desired calorie intake. This approach
            empowers users to achieve their goals and access a wide range of
            exercises and meals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fitfoods;
