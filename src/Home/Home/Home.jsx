import { ToastContainer } from "react-toastify";
import Container from "../../components/Container";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className="font-poppins text-slate-700 mb-24">
      <header>
        <Navbar />
      </header>
      <Container className="space-y-32">
        <Banner />
        <Skills />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Home;
