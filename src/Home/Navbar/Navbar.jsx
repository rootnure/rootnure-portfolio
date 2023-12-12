import { Link as ScrollLink, scrollSpy } from "react-scroll";
import Logo from "../../components/Logo";
import Container from "../../components/Container";
import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100 bg-opacity-40 backdrop-blur-xl shadow z-[1000]">
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
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-96}
              to="resume">
              Resume
            </ScrollLink>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
