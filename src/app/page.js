
import AboutMe from "@/sections/AboutMe";
import Contacts from "@/sections/Contacts";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";
import Navbar from "@/sections/Navbar";
import Intro from "@/sections/Intro";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center w-full ">
      <Navbar />
      <Intro />
      <AboutMe />
      <Experiences/>
      <Projects />
      <Contacts />
    </div>
  );
}