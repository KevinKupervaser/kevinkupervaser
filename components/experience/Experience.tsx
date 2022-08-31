import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const thresh = 0.5;

  const { ref: textRef, inView: textIsVisible } = useInView({
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
    if (textIsVisible) {
      animation.start(initialAnimation);
    } else {
      animation.start({ y: "5vh", opacity: 0, scale: 0.9 });
    }
  }, [textIsVisible, animation]);

  return (
    <section className='h-screen bg-[#8cecffaf] relative' ref={textRef}>
      <motion.div
        className='hidden sm:block absolute bottom-0 left-0 z-0'
        animate={animation}
      >
        <h2 className='text-[12rem] font-bold text-white opacity-25'>
          EXPERIENCE...
        </h2>
      </motion.div>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen place-items-center'>
        <div className='flex flex-col justify-center max-w-[600px] text-center sm:text-left px-5 sm:px-0'>
          <h2 className='text-6xl sm:text-8xl font-bold text-[#069ebd] tracking-wide'>
            WORK EXPERIENCE
          </h2>
          <p className='mt-4 text-base sm:max-w-[500px] tracking-wide z-50 text-center sm:text-justify'>
            As a Freelance Frontend Developer, I already have some real work
            experience with clients, building two different kinds of projects.
            <br />
            <br />
            The first one is an App like project called the money tracker app
            build for an accountant in the city of Buenos Aires, the main goal
            of the app is tracking the income and the expense of a single person
            to manage personal economy and inform the accountant for a monthly
            balance. The app was built with the MERN stack.
            <br />
            <br />
            The second one is a landing page with a built-in e-commerce made for
            a Nutritionist in my hometown. I build this one on Next.js and works
            with the WhatsApp API to send messages with the actual products,
            it’s really dynamic and easy to manage.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='p-3 bg-[#069ebd] flex flex-col items-center justify-center z-50 rounded-lg'>
            <picture>
              <img
                src={"/app1.png"}
                className='w-[150px] sm:w-[450px] rounded-md'
              />
            </picture>
            <p className='text-white text-center mt-2 z-50 text-xs sm:text-base'>
              <a
                className='cursor-pointer'
                href='https://moneytrackerapp-01.herokuapp.com/register'
                rel='noreferrer'
                target={"_blank"}
              >
                CLICK HERE TO CHECK IT OUT
              </a>
            </p>
          </div>
          <div className='p-3 bg-[#069ebd] flex flex-col items-center justify-center z-50 rounded-lg'>
            <picture>
              <img
                src={"/app2.png"}
                className='w-[150px] sm:w-[450px] rounded-md'
              />
            </picture>
            <p className='text-white text-center mt-2 z-50 text-xs sm:text-base'>
              <a
                className='cursor-pointer'
                href='https://espaciosaludable.vercel.app'
                rel='noreferrer'
                target={"_blank"}
              >
                CLICK HERE TO CHECK IT OUT
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
