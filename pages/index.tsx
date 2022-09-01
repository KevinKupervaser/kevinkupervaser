import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import ContactFooter from "../components/footer/ContactFooter";
import Hero from "../components/hero/Hero";
import Learning from "../components/learning/Learning";
import Navbar from "../components/navbar/Navbar";
import ProjectCard from "../components/projects/ProjectCard";
import Projects from "../components/projects/Projects";
import Techstack from "../components/techstack/Techstack";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kevin Kupervaser</title>
        <meta name='description' content='Kevin Kupervaser Frontend Web Developer' />
        <link rel='icon' href='/developer.png' />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Learning />
      <Techstack />
      <Experience />
      <Projects />
      <footer>
        <ContactFooter />
      </footer>
    </div>
  );
};

export default Home;
