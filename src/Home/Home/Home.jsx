import Container from "../../components/Container";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="font-poppins text-slate-700">
      <header>
        <Navbar />
      </header>
      <Container>
        <Banner />
        <Skills />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
      </Container>
    </div>
  );
};

export default Home;
