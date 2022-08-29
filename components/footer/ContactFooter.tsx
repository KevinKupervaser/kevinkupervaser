import Link from "next/link";
import React from "react";
import GithubLogo from "../logos/GithubLogo";
import LinkedinLogo from "../logos/LinkedinLogo";

const ContactFooter = () => {
  return (
    <footer>
      <div className='bg-[#4de1ff] w-full p-5 flex items-center justify-between'>
        <div>
          <Link href={"/"}>
            <a>
              <h4 className='text-xl font-semibold text-white hover:text-[#3499adbd] cursor-pointer transition ease-in delay-100'>
                Copyright © 2022 | Kevin Kupervaser
              </h4>
            </a>
          </Link>
        </div>
        <div className='flex space-x-3'>
          <Link href={"/"}>
            <a>
              <GithubLogo />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <LinkedinLogo />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
