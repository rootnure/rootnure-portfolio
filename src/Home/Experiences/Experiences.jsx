import SectionTitle from "../../components/SectionTitle";
import imgExp1 from "../../assets/photos/ProgrammingHero-b8.png";
import imgExp2 from "../../assets/photos/master-html-css.jpg";
import imgExp3 from "../../assets/photos/master-git-and-github.jpg";
import checkmark from "../../assets/photos/blue-check-mark.png";

const Experiences = () => {
  return (
    <section className="" name="experiences">
      <SectionTitle>Experiences</SectionTitle>
      <div className="space-y-6">
        {/* Programming Hero (Batch 8) */}
        <div className="flex items-center flex-col lg:flex-row gap-x-12 gap-y-6 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[500px] h-[300px] py-4">
            <img
              src={imgExp1}
              alt="Complete Web Development Course With Jhankar Mahbub"
              className="min-w-full min-h-full object-cover rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-6 flex-1 text-center lg:text-right">
            <a
              href="https://web.programming-hero.com/home"
              className="hover:underline">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Complete Web Development Course
              </h2>
            </a>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-500">
              Programming Hero / 2023 - Present
            </h3>
            <p className="text-sm md:text-base">
              This Course Is Created For Those Who Want To Learn Web Development
              From Scratch And Build A Career As A Web Developer In Software
              Companies. Even Those Who Studied CSE For Four Years But
              Didn&apos;t Learn Much And Couldn&apos;t Decide What To Do, Can
              Complete Web Development From This Course And Apply For Jobs.
            </p>
          </div>
        </div>
        {/* Udemy HTML and CSS */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-x-12 gap-y-6 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[500px] h-[300px] py-4">
            <img
              src={imgExp2}
              alt="Master HTML and CSS by building real world projects"
              className="min-w-full min-h-full object-cover rounded-lg group-hover:rotate-1 group-hover:-skew-x-1 group-hover:-skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-center lg:text-left">
            <a
              href="https://www.udemy.com/course/master-html-and-css-by-building-real-world-projects/"
              className="hover:underline">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Master HTML and CSS
              </h2>
            </a>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-500">
              Udemy (Anisul Islam) / 2023
            </h3>
            <p className="text-sm md:text-base">
              Learn css, flex, grid, web accessibility, responsiveness, BEM
              architecture, animation by building e-commerce project
            </p>
            <ul className="text-xs md:text-sm flex flex-col items-start">
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" className="h-3" />
                Advanced CSS including Specificity calculation, BEM Architecture
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" className="h-3" />
                Basics to advanced HTML including Web accessibility
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" className="h-3" />
                CSS Advanced Layout including flex, grid layout
              </li>
              <li className="flex items-center gap-2">
                <img src={checkmark} alt="" className="h-3" />
                Design real-world and responsive websites
              </li>
            </ul>
          </div>
        </div>
        {/* Udemy Git and GitHub */}
        <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-6 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[500px] h-[300px] py-4">
            <img
              src={imgExp3}
              alt="Master Git and Github - Beginner to Expert"
              className="min-w-full min-h-full object-cover rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-center lg:text-right">
            <a
              href="https://www.udemy.com/course/git-and-github-for-absolute-beginners/"
              className="hover:underline">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Master Git and Github
              </h2>
            </a>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-500">
              Udemy (Anisul Islam) / 2023
            </h3>
            <p className="text-sm md:text-base">
              Learn git configuration, commit, branching, merging, contributing
              and collaboration with other&apos;s project
            </p>
            <ul className="text-xs md:text-sm flex flex-col items-start md:items-end space-y-1">
              <li className="flex flex-row-reverse md:flex-row items-center gap-2">
                Git overall work flow including staging, upstaging, committing
                etc.
                <img src={checkmark} alt="" className="h-3" />
              </li>
              <li className="flex flex-row-reverse md:flex-row items-center gap-2">
                How to work with local and remote repositories - push, pull
                <img src={checkmark} alt="" className="h-3" />
              </li>
              <li className="flex flex-row-reverse md:flex-row items-center gap-2">
                How to Contribute to other&apos;s project - fork, clone
                <img src={checkmark} alt="" className="h-3" />
              </li>
              <li className="flex flex-row-reverse md:flex-row items-center gap-2">
                How to branching in Git and GitHub
                <img src={checkmark} alt="" className="h-3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
