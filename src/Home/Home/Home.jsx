import Container from "../../components/Container";
import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Navbar />
      </header>
      <Container className="text-slate-700">
        <Banner />
        <Experiences />
        <div id="#projects" name="projects" className="h-[1000px]">
          proj
        </div>
        <div id="#education" name="education" className="h-[1000px]">
          edu
        </div>
        <div id="#contact" name="contact" className="h-[1000px]">
          cont
        </div>
        <div id="#resume" name="resume" className="h-[1000px]">
          resume
        </div>
      </Container>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
