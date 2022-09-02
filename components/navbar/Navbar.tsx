import Link from "next/link";
import * as React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <div className='bg-cyan-400/10 p-5 fixed top-0 w-full z-[99] shadow-sm'>
        {/* MOBILE */}
        <div
          className='w-8 h-8 md:hidden ml-[20rem]'
          onClick={() => setOpen(!open)}
        >
          {!open && <MenuIcon />}
          {open && <XIcon />}
          <div
            className={`sm:hidden absolute top-[4.5rem] left-0 w-full h-[50vh] bg-[#069ebd] flex flex-col items-center justify-center duration-[750ms] text-[#f9be29] text-xl gap-5 ${
              open ? "left-[0rem]" : "left-[100%]"
            }`}
          >
            <Link href={"#about"}>
              <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                About Me
              </a>
            </Link>
            <Link href={"#learning"}>
              <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                Learning Resources
              </a>
            </Link>
            <Link href={"#tech"}>
              <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                Techstack
              </a>
            </Link>
            <Link href={"#experience"}>
              <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                Experience
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                Contact Me
              </a>
            </Link>
          </div>
        </div>

        <nav className='hidden sm:flex items-center justify-center gap-5 font-bold text-[#069ebd]'>
          <Link href={"#about"}>
            <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
              About Me
            </a>
          </Link>
          <Link href={"#learning"}>
            <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
              Learning Resources
            </a>
          </Link>
          <Link href={"#tech"}>
            <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
              Techstack
            </a>
          </Link>
          <Link href={"#experience"}>
            <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
              Experience
            </a>
          </Link>
          <Link href={"/contact"}>
            <a className='hover:text-[#f9be29] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
              Contact Me
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
