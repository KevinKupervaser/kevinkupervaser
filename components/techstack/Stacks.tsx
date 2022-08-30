import * as React from "react";
import { Stack } from "./Types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TechstackProps {
  stacks: Stack[];
}

const Stacks: React.FC<TechstackProps> = ({ stacks }) => {
  const thresh = 0.9;

  const { ref: stackRef, inView: stackIsVisible } = useInView({
    threshold: thresh,
  });

  const initialAnimation = {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  };

  const animation = useAnimation();

  React.useEffect(() => {
    if (stackIsVisible) {
      animation.start(initialAnimation);
    } else {
      animation.start({ y: "5vh", opacity: 0, scale: 0.9 });
    }
  }, [stackIsVisible, animation]);

  return (
    <>
      {stacks.map((stack, index) => (
        <motion.div
          ref={stackRef}
          animate={animation}
          key={index}
          className='bg-white w-[150px] h-[100px] rounded-lg shadow-lg z-[99] flex items-center justify-center'
        >
          <div className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <picture>
              <img
                src={stack.logo}
                alt={stack.title}
                className='w-[50px] h-[50px] object-contain'
              />
            </picture>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Stacks;
