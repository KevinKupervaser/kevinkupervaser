import Link from "next/link";
import React from "react";
import GithubLogo from "../logos/GithubLogo";
import LinkedinLogo from "../logos/LinkedinLogo";

const ContactFooter = () => {
  return (
    <>
      <div className='bg-[#4de1ff] w-full p-5 flex items-center justify-between'>
        <div>
          <Link href={"/"}>
            <a>
              <h4 className='text-xl font-semibold text-white hover:text-[#3499adbd] cursor-pointer transition ease-in delay-100'>
                Made in Next.Js © 2022 | Kevin Kupervaser
              </h4>
            </a>
          </Link>
        </div>
        <div className='flex space-x-3'>
          <a
            href='https://github.com/KevinKupervaser'
            target={"_blank"}
            rel='noreferrer'
          >
            <GithubLogo />
          </a>

          <a
            href='https://www.linkedin.com/in/kevin-gregori-dohrmann-kupervaser-813668202/'
            target={"_blank"}
            rel='noreferrer'
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactFooter;
