import Container from "../../components/Container";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="font-bold">main</main>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
