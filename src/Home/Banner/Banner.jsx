import bannerImg from "../../assets/photos/rootnure.png";
import resume from "../../assets/files/Md Nure Alom's Resume - 8.pdf";
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      className="pt-12 md:py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-28 lg:mt-12 h-1/2 lg:min-h-[100svh]"
      name="top">
      <div className="text-center lg:text-left flex flex-col lg:flex-none items-center lg:items-start">
        <p className="text-orange-500 text-sm md:text-base lg:text-xl font-semibold">
          Hello,
        </p>
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-medium">
            <span className="inline-block mt-2 mb-4">I am,</span> <br />
            <span className="font-bold bg-gradient-to-r text-transparent w-fit bg-clip-text from-orange-500 to-orange-600 whitespace-nowrap tracking-wider">
              Md Nure Alom
            </span>
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 via-red-500 to-blue-500 text-transparent bg-clip-text w-fit">
            Jr. MERN Stack Web Developer
          </h2>
        </div>
        <a href={resume} download>
          <button className="bg-orange-500 px-4 py-2 border rounded-lg text-lg md:text-2xl border-orange-300 text-white font-semibold mt-8 hover:bg-orange-600 duration-150 flex items-center gap-2">
            Resume <FaDownload />
          </button>
        </a>
      </div>
      <div className="order-first md:order-last">
        <figure>
          <img src={bannerImg} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
