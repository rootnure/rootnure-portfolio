import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle";

import img1 from "../../assets/projectsSS/NiyeJaiDotCom/01.png";
import img2 from "../../assets/projectsSS/NiyeJaiDotCom/02.png";
import img3 from "../../assets/projectsSS/NiyeJaiDotCom/03.png";
import img4 from "../../assets/projectsSS/NiyeJaiDotCom/04.png";
import img5 from "../../assets/projectsSS/NiyeJaiDotCom/05.png";
import img6 from "../../assets/projectsSS/NiyeJaiDotCom/06.png";
import img7 from "../../assets/projectsSS/NiyeJaiDotCom/07.png";
import img8 from "../../assets/projectsSS/NiyeJaiDotCom/08.png";
import img9 from "../../assets/projectsSS/NiyeJaiDotCom/09.png";
import img10 from "../../assets/projectsSS/NiyeJaiDotCom/10.png";
import img11 from "../../assets/projectsSS/NiyeJaiDotCom/11.png";

const Projects = () => {
  return (
    <section className="my-24" name="projects">
      <SectionTitle>Projects</SectionTitle>
      {/* niyejai dot com */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          {/* images */}
          <Carousel autoPlay interval={2500} infiniteLoop>
            <div>
              <img src={img1} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Top
              </p>
            </div>
            <div>
              <img src={img2} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Home Bottom
              </p>
            </div>
            <div>
              <img src={img3} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Log In
              </p>
            </div>
            <div>
              <img src={img4} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Sign Up
              </p>
            </div>
            <div>
              <img src={img5} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Book A Parcel
              </p>
            </div>
            <div>
              <img src={img6} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                My Bookings
              </p>
            </div>
            <div>
              <img src={img7} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Success Payment
              </p>
            </div>
            <div>
              <img src={img8} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                Profile
              </p>
            </div>
            <div>
              <img src={img9} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Bookings
              </p>
            </div>
            <div>
              <img src={img10} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Users
              </p>
            </div>
            <div>
              <img src={img11} />
              <p className="text-white !bg-orange-500 bg-opacity-20 hover:bg-opacity-100 legend">
                All Delivery Men
              </p>
            </div>
          </Carousel>
        </div>
        <div className="space-y-4">
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
          <div className="flex gap-4 text-white font-bold">
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
    </section>
  );
};

export default Projects;
