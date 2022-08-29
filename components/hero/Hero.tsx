import React from "react";

const Hero = () => {
  return (
    <section>
      <div className='h-screen flex items-center'>
        <div className='flex flex-col ml-5'>
          <p className='font-semibold sm:text-4xl text-[#f9be29] tracking-widest text-xl'>
            Hello There👋! I'm
          </p>
          <h1 className='sm:text-[10rem] text-[#4de1ff] font-bold sm:mt-[-2.5rem] text-[3rem]'>
            KEVIN KUPERVASER.
          </h1>
          <p className='font-semibold sm:text-4xl text-[#f9be29] sm:mt-[-2rem] tracking-widest text-end sm:mr-[2rem] text-xl'>
            Lawyer & Frontend Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
