import bannerImg from "../../assets/photos/rootnure.png";
import resume from "../../assets/files/resume.txt";
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      className="py-12 grid grid-cols-2 items-center gap-6 mt-12 min-h-screen"
      name="top">
      <div className="">
        <p className="text-orange-500 text-xl font-semibold">Hello,</p>
        <div className="space-y-4">
          <h2 className="text-7xl font-medium leading-snug">
            I am,
            <br />
            <span className="font-bold bg-gradient-to-r text-transparent w-fit bg-clip-text from-orange-500 to-orange-600">
              Md Nure Alom
            </span>
          </h2>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-red-500 to-blue-500 text-transparent bg-clip-text w-fit">
            Jr. MERN Stack Web Developer
          </h2>
        </div>
        <a href={resume} download>
          <button className="bg-orange-500 px-4 py-2 border rounded-lg text-2xl border-orange-300 text-white font-semibold mt-8 hover:bg-orange-600 duration-150 flex items-center gap-2">
            Resume <FaDownload />
          </button>
        </a>
      </div>
      <div>
        <figure>
          <img src={bannerImg} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
