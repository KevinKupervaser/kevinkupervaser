import React from "react";
import GithubLogo from "../logos/GithubLogo";

const Projects = () => {
  return (
    <section className='h-[50vh]'>
      <div className='flex flex-col items-center justify-center h-[50vh] '>
        <a
          href='https://github.com/KevinKupervaser'
          target={"_blank"}
          rel='noreferrer'
        >
          <h2 className='text-center text-3xl sm:text-5xl font-bold text-[#4de1ff] tracking-widest'>
            CLICK HERE TO CHECK OUT MY PROJECTS! 💻
          </h2>
        </a>
      </div>
    </section>
  );
};

export default Projects;
