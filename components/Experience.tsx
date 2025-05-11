import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Sabbir Ahmed - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Web /</span> Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2024 - Present, Intellect Software Limited
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a Junior Web Developer at Intellect Software Limited, I worked on several client-focused web projects using modern technologies such as Laravel, Vue.js, and MySQL. My responsibilities included developing and maintaining features in existing applications, writing clean and maintainable code, integrating APIs, and collaborating with senior developers to meet project goals. <br /> <br /> This experience significantly improved my problem-solving skills, coding standards, and understanding of full-stack development. It also reinforced my ability to work in a team-based, agile environment and prepared me for larger-scale development challenges.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Laravel
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vue js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
