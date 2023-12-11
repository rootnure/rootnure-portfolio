import Logo from "../../components/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-4">
      <Logo />
      <div>
        <button>Home</button>
        <button>Experiences</button>
        <button>Projects</button>
        <button>Education</button>
        <button>Contact Me</button>
        <button>Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
