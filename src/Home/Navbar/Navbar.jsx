import Logo from "../../components/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-4">
      <Logo />
      <div>nav items</div>
    </nav>
  );
};

export default Navbar;
