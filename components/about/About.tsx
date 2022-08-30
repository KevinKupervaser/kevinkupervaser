import React from "react";
import Wave from "../ui/Wave";
import Lottie from "react-lottie-player";
import animationData from "../../public/83087-developer-front-end.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const thresh = 0.2;

  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: thresh,
  });

  const animation = useAnimation();

  React.useEffect(() => {
    const initialAnimation = {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    };
    if (sectionIsVisible) {
      animation.start(initialAnimation);
    } else {
      animation.start({ y: "5vh", opacity: 0, scale: 0.9 });
    }
  }, [sectionIsVisible, animation]);

  return (
    <motion.section
      ref={sectionRef}
      className='h-screen bg-[#8cecffaf] relative z-50'
      animate={animation}
      id='about'
    >
      <Wave />
      <div className='hidden sm:block absolute text-[10rem] md:text-[15rem] font-bold lg:top-0 left-[5rem] text-white tracking-widest opacity-30 top-[8rem] z-[-1]'>
        ABOUT...
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen sm:place-items-center justify-items-center overflow-hidden'>
        <div className='w-[350px] h-[350px] object-cover mt-[7rem] z-50'>
          <Lottie
            animationData={animationData}
            loop={true}
            speed={1}
            play={true}
          />
        </div>
        <div className='text-center sm:text-left px-6 sm:px-0 sm:mr-10 sm:mt-10'>
          <h2 className='font-bold text-4xl sm:text-5xl z-[50] text-[#069ebd]'>
            INTRO
          </h2>
          <p className='text-[0.8rem] sm:text-xl max-w-[600px] tracking-wide'>
            Hi, my name is Kevin Kupervaser, I'm a Lawyer with a bachelor's
            degree from the National Northeastern University - Argentina. A
            self-taught Frontend developer thanks to the power of the Internet.
            In 2020 I've decided to make a career change into the IT industry.
            <br /> <br />I enjoy making clean and interactive UX/UI that is
            quick and easy to use whilst also giving users an enjoyable
            experience. I've have experience with diferent languages and
            frameworks and I am always looking for opportunities to work with
            something new. <br /> <br />
            On my time off I am very active and spend most of my time outdoors.
            I do a lot a sports such as biking, running as well as trying to
            make time for things like playing soccer and videogames.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
