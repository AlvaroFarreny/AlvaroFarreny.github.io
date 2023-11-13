import React from "react";

const NombresCamaro = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 z-0">
        <div className="mb-24">
          <img
            src="../assets/camaronftexpanded.png"
            className="w-full h-full object-cover lazyload"
            alt="Life++ Background"
          />
        </div>
      </div>
      <div className="z-[9] relative p-4 -ml-32 md:mt-44 mt-20">
        <h1 className="text-black text-3xl font-bold">Nombres Camaró</h1>
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
            <li className="text-black">Pablo González</li>
            <li className="text-black">Asaf Levi</li>
            <li className="text-black">Xiomara Ferrer</li>
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
            Software Engineering
          </h2>
          <h3 className="mb-4">November 2021 - June 2022</h3>
          <h3 className="font-semibold text-md">Technologies</h3>
          <div className="grid mt-2 grid-cols-4 sm:grid-cols-7 md:grid-cols-7  lg:grid-cols-7 gap-4 mb-4">
            <img title="VSCode" src="https://skillicons.dev/icons?i=vscode" />
            <img
              title="Solidity"
              src="https://skillicons.dev/icons?i=solidity"
            />
            <img title="React" src="https://skillicons.dev/icons?i=react" />
            <img
              title="Typescript"
              src="https://skillicons.dev/icons?i=typescript"
            />
          </div>
          <a
            href="#"
            className="font-mono flex flex-row items-center text-gray-400 dark:text-gray-400 line-through"
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
            Web 3.0 and blockchain <br></br> Empowering through
            decentralization.
          </h3>
          <p>
            Nombres Camaró is an innovative NFT (Non-Fungible Token) project
            that has been thoughtfully crafted in support of the{" "}
            <a
              href="https://www.antoniocamaro.org/"
              className="underline underline-offset-1 text-white"
            >
              Antonio Camaró Foundation
            </a>
            . This project has been developed in close collaboration with the
            Criptoclub at the Universidad Europea de Madrid, and has combined
            the blockchain enthusiasm and the desire for learning new
            technologies.
          </p>
          <br />
          <p>
            Using the latest features of blockchain and web3.0 technologies like
            React, Typescript, and Solidity, Nombres Camaró shows how amazing
            these new developments can be. By smoothly putting these strong
            tools together, the project wants to change how we make, share, and
            value digital things.
          </p>
          <br />
          <p>
            In a strategic decision aligned with the project's objectives, the
            cryptocurrency AVAX has been selected as the medium of transaction
            within Nombres Camaró NFTs. AVAX has been chosen for its inherent
            adaptability and suitability.
          </p>

          <br></br>
          <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              "Web3 is the future of the internet – a user-centric,
              decentralized way of interacting with data and apps." - Chris
              Dixon
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NombresCamaro;
