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
    <div className="fixed top-0 left-0 right-0 backdrop-blur shadow">
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
              offset={-64}
              to="top">
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              to="experience">
              Experiences
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              to="projects">
              Projects
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              to="education">
              Education
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              to="contact">
              Contact Me
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              className="hover:cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
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
