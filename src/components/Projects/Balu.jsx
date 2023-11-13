import React from "react";

const Balu = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 z-0">
        <div className="mb-24">
          <img
            src="../assets/baluexpanded.png"
            className="w-full h-full object-cover"
            alt="Life++ Background"
          />
        </div>
      </div>
      <div className="z-[9] relative p-4 -ml-32 md:mt-44 mt-20">
        <h1 className="text-black text-3xl font-bold">Balu App</h1>
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold mt-10">Role</h2>
          <p className="text-black">Designer & Developer</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Duration</h2>
          <p className="text-black">2 months</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Team</h2>
          <ul>
            <li className="text-black">Ignacio Gil</li>
            <li className="text-black">Crishina Ruiz</li>
          </ul>
        </div>
      </div>
      <div className="z-[9] relative mt-48 mb-[180px] flex justify-center">
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
            UI/UX Design
          </h2>
          <h3 className="mb-4">April 2023 - June 2023</h3>
          <h3 className="font-semibold text-md">Technologies</h3>
          <div className="grid mt-2 grid-cols-4 sm:grid-cols-7 md:grid-cols-7  lg:grid-cols-7 gap-4 mb-4">
            <img
              title="React Native"
              src="https://skillicons.dev/icons?i=react"
            />
            <img
              title="Visual Studio Code"
              src="https://skillicons.dev/icons?i=vscode"
            />
            <img title="Figma" src="https://skillicons.dev/icons?i=figma" />
          </div>
          <a
            href="https://github.com/AlvaroFarreny/BaluApp"
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
            Introducing Balú App
          </h3>
          <p>
            A cutting-edge mobile solution designed for the renowned Balú Açai
            café in Boadilla del Monte. Our innovative react-native application
            revolutionizes the ordering experience, offering a seamless,
            intuitive, and convenient way to place orders. Balú App redefines
            how customers interact with their favorite café.
          </p>
          <br />
          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
            Jacob Nielsen usability principles
          </h3>
          <p>
            This project is designed following the usability principles based on
            the ten principles crafted by Jacob Nielsen:
          </p>
          <ol className="py-1">
            <li className="py-2">
              <strong className="text-blue-300">
                Visibility of System Status
              </strong>
              <br />
              The user should always know the current state of the system and
              the available actions.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Relationship Between System and Real World{" "}
              </strong>{" "}
              <br />
              The system should use terms and conventions familiar to users from
              the real world.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                User Control and Freedom{" "}
              </strong>
              <br /> Users should have the freedom to undo or redo their actions
              and escape undesirable states.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Consistency and Standards{" "}
              </strong>{" "}
              <br />
              The interface should be consistent in its design, terminology, and
              behavior throughout.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">Error Prevention </strong>
              <br /> The system should prevent errors by offering clear and
              concise instructions and cues.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Recognition Over Recall{" "}
              </strong>{" "}
              <br />
              The system's options should be visible and easily recognizable
              without requiring users to recall information.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Flexibility and Efficiency of Use{" "}
              </strong>{" "}
              <br /> The system should cater to both novice and experienced
              users, providing shortcuts and advanced options as needed.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Aesthetics and Minimalist Design{" "}
              </strong>
              <br /> The interface should be aesthetically pleasing and free
              from unnecessary distractions.
            </li>
            <li className="py-2">
              <strong className="text-blue-300">
                Help Users Recognize, Diagnose, and Recover from Errors
              </strong>
              <br />
              Error messages should be clear, precise, and provide guidance on
              resolving issues.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Balu;
