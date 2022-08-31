import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Learning = () => {
  const thresh = 0.7;

  const { ref: sectionRef, inView: imageIsVisible } = useInView({
    threshold: thresh,
  });

  const animation = useAnimation();

  React.useEffect(() => {
    const initialAnimation = {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    };
    if (imageIsVisible) {
      animation.start(initialAnimation);
    } else {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [imageIsVisible, animation]);

  return (
    <section
      className='h-screen flex items-center justify-center mt-[10rem] sm:mt-0'
      ref={sectionRef}
    >
      <div className='text-center flex flex-col items-center justify-center'>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#f9be29]'>
          Learning Resources📚
        </h2>
        <p className='text-base px-5 sm:px-0 sm:text-xl mt-5 max-w-[800px] mx-auto'>
          I've managed to learn different technologies throughout many online
          academies for example: Udemy, Academind, FrontendMasters,
          Codingheroes, Codewithmosh, Coursera and Youtube. Today I'm a web
          developer thanks to:
        </p>
        <motion.div
          className='flex flex-col sm:flex-row items-center justify-between sm:w-[1000px]'
          animate={animation}
        >
          <div className='flex flex-col items-center justify-center'>
            <picture>
              <img
                src={"jonas.jpg"}
                alt='Jonas Schmedtmann'
                className='w-[150px] h-[150px] rounded-full object-cover mt-[5rem]'
              />
            </picture>
            <h3 className='font-bold text-xl text-[#4de1ff] mt-5'>
              Jonas Schmedtmann
            </h3>
            <p className='opacity-30'>
              CEO{" "}
              <a
                href='https://codingheroes.io'
                target={"_blank"}
                className='hover:text-blue-900 hover:underline'
                rel='noreferrer'
              >
                Codingheroes.io
              </a>
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <picture>
              <img
                src={"max.jpg"}
                alt='Maximilian Schwarzmüller'
                className='w-[150px] h-[150px] rounded-full object-cover mt-[5rem]'
              />
            </picture>
            <h3 className='font-bold text-xl text-[#4de1ff] mt-5'>
              Maximilian Schwarzmüller
            </h3>
            <p className='opacity-30'>
              CEO{" "}
              <a
                href='https://academind.com/'
                target={"_blank"}
                className='hover:text-blue-900 hover:underline'
                rel='noreferrer'
              >
                Academind.com
              </a>
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <picture>
              <img
                src={"mosh.jpg"}
                alt='Moshfegh Hamedani'
                className='w-[150px] h-[150px] rounded-full object-cover mt-[5rem]'
              />
            </picture>
            <h3 className='font-bold text-xl text-[#4de1ff] mt-5'>
              Moshfegh Hamedani
            </h3>
            <p className='opacity-30'>
              CEO{" "}
              <a
                href='https://codewithmosh.com/'
                target={"_blank"}
                className='hover:text-blue-900 hover:underline'
                rel='noreferrer'
              >
                Codewithmosh.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
