import * as React from "react";
import stacksData from "../../data/data";
import ContactFooter from "../footer/ContactFooter";
import Stacks from "./Stacks";

const Techstack = () => {
  const [filteredStacks, setFilteredStacks] = React.useState(
    stacksData.slice(0, 100)
  );

  return (
    <section className='h-screen z-0 mt-[10rem] sm:mt-0'>
      <div className='flex items-center justify-center'>
        <h2 className='font-bold text-6xl sm:text-[10rem] text-[#4de1ff] tracking-widest'>
          Tech-Stack
        </h2>
      </div>
      <div className='flex items-center justify-center z-[99] mt-[5rem] sm:mt-0 h-screen'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-[850px] place-items-center'>
          <Stacks stacks={filteredStacks.slice(0, 100)} />
        </div>
      </div>
    </section>
  );
};

export default Techstack;
