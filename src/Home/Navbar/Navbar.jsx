import { Link as ScrollLink, scrollSpy } from "react-scroll";
import Logo from "../../components/Logo";
import Container from "../../components/Container";
import "./Navbar.css";
import { useEffect } from "react";
import resume from "../../assets/files/resume.txt";

const Navbar = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100 bg-opacity-40 backdrop-blur-3xl shadow z-[1000]">
      <Container>
        <nav className="flex justify-between items-center py-2">
          <Logo />
          <div className="flex gap-8">
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="top">
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="skills">
              Skills
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="experiences">
              Experiences
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="projects">
              Projects
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="education">
              Education
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="contact">
              Contact Me
            </ScrollLink>
          </div>
          <a href={resume} download>
            <button className="bg-orange-500 px-4 py-2 border-2 border-orange-500 rounded-lg text-white font-semibold hover:bg-white hover:text-orange-500 duration-150 flex items-center gap-2">
              Download Resume
            </button>
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
