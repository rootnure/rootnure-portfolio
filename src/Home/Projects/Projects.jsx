import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle";

import project1img1 from "../../assets/projectsSS/NiyeJaiDotCom/01.png";
import project1img2 from "../../assets/projectsSS/NiyeJaiDotCom/02.png";
import project1img3 from "../../assets/projectsSS/NiyeJaiDotCom/03.png";
import project1img4 from "../../assets/projectsSS/NiyeJaiDotCom/04.png";
import project1img5 from "../../assets/projectsSS/NiyeJaiDotCom/05.png";
import project1img6 from "../../assets/projectsSS/NiyeJaiDotCom/06.png";
import project1img7 from "../../assets/projectsSS/NiyeJaiDotCom/07.png";
import project1img8 from "../../assets/projectsSS/NiyeJaiDotCom/08.png";
import project1img9 from "../../assets/projectsSS/NiyeJaiDotCom/09.png";
import project1img10 from "../../assets/projectsSS/NiyeJaiDotCom/10.png";
import project1img11 from "../../assets/projectsSS/NiyeJaiDotCom/11.png";

import project2img1 from "../../assets/projectsSS/Foodbuzz/01.png";
import project2img2 from "../../assets/projectsSS/Foodbuzz/02.png";
import project2img3 from "../../assets/projectsSS/Foodbuzz/03.png";
import project2img4 from "../../assets/projectsSS/Foodbuzz/04.png";
import project2img5 from "../../assets/projectsSS/Foodbuzz/05.png";
import project2img6 from "../../assets/projectsSS/Foodbuzz/06.png";
import project2img7 from "../../assets/projectsSS/Foodbuzz/07.png";

const Projects = () => {
  return (
    <section className="my-24" name="projects">
      <SectionTitle>Projects</SectionTitle>
      {/* niyejai dot com */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
        <div>
          {/* images */}
          <Carousel autoPlay interval={2500} infiniteLoop>
            <div>
              <img src={project1img1} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Top
              </p>
            </div>
            <div>
              <img src={project1img2} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Bottom
              </p>
            </div>
            <div>
              <img src={project1img3} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Log In
              </p>
            </div>
            <div>
              <img src={project1img4} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Sign Up
              </p>
            </div>
            <div>
              <img src={project1img5} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Book A Parcel
              </p>
            </div>
            <div>
              <img src={project1img6} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                My Bookings
              </p>
            </div>
            <div>
              <img src={project1img7} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Success Payment
              </p>
            </div>
            <div>
              <img src={project1img8} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Profile
              </p>
            </div>
            <div>
              <img src={project1img9} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Bookings
              </p>
            </div>
            <div>
              <img src={project1img10} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Users
              </p>
            </div>
            <div>
              <img src={project1img11} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Delivery Men
              </p>
            </div>
          </Carousel>
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-semibold">1. Niye Jai Dot Com</h2>
          <p>
            Parcel Management App (
            <span className="font-semibold">
              an online platform where people can Book Parcel To Deliver, Admin
              Can Assign Delivery Person, and Delivery Person Delivers the
              Parcel
            </span>
            ) using the MERN stack.
          </p>
          <div>
            <p className="font-medium underline">Features:</p>
            <ul className="list-disc list-inside text-sm">
              <li>
                React Confetti Explosion Package to celebrate successful payment
              </li>
              <li>IMGBB used to upload and store images</li>
              <li>
                Authorization & Authentication added using firebase and jwt
              </li>
              <li>Routes added and protected based on role</li>
              <li>
                User can add, edit, cancel booking and pay for that booking
              </li>
              <li>Delivery Men can mark delivered or cancel booking</li>
              <li>JWT used with LocalStorage for authentication</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 text-white font-bold">
            <a
              href="https://niye-jai.web.app/"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Live Link
              </button>
            </a>
            <a
              href="https://github.com/rootnure/niye-jai-dot-com-client-72"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Client Side
              </button>
            </a>
            <a
              href="https://github.com/rootnure/niye-jai-dot-com-server-72"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Server Side
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* foodbuzz */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        <div className="lg:order-2">
          {/* images */}
          <Carousel autoPlay interval={2500} infiniteLoop>
            <div>
              <img src={project2img1} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Top
              </p>
            </div>
            <div>
              <img src={project2img2} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Bottom
              </p>
            </div>
            <div>
              <img src={project2img3} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Log In
              </p>
            </div>
            <div>
              <img src={project2img4} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Sign Up
              </p>
            </div>
            <div>
              <img src={project2img5} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Item
              </p>
            </div>
            <div>
              <img src={project2img6} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Add An Item
              </p>
            </div>
            <div>
              <img src={project2img7} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                My Ordered Food
              </p>
            </div>
          </Carousel>
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-semibold">2. Foodbuzz</h2>
          <p>
            Restaurant Management Website (
            <span className="font-semibold">
              an online platform where admin can add an item, user can order an
              item. Admin cannot buy own added item
            </span>
            ) using the MERN stack.
          </p>
          <div>
            <p className="font-medium underline">Features:</p>
            <ul className="list-disc list-inside text-sm">
              <li>lottie react used for conditional animations</li>
              <li>
                Framer Motion animation also used for better animation styles
              </li>
              <li>
                Top 6 food is displayed in home page upon most number of sell
              </li>
              <li>
                Verification token will be generated and used upon need
                (httpOnly)
              </li>
              <li>User can create account using google or email/password</li>
              <li>
                User can view detail form single food page and place order from
                purchase page
              </li>
            </ul>
          </div>
          <div className="flex gap-4 text-white font-bold">
            <a
              href="https://foodbuzz-rootnure.web.app/"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Live Link
              </button>
            </a>
            <a
              href="https://github.com/rootnure/foodbuzz-client-63"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Client Side
              </button>
            </a>
            <a
              href="https://github.com/rootnure/foodbuzz-server-63"
              target="_blank"
              rel="noreferrer">
              <button className="px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 duration-75">
                Server Side
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
