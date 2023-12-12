import SectionTitle from "../../components/SectionTitle";
import imgExp1 from "../../assets/photos/ProgrammingHero-b8.png";
import imgExp2 from "../../assets/photos/master-html-css.jpg";
import imgExp3 from "../../assets/photos/master-git-and-github.jpg";

const Experiences = () => {
  return (
    <section className="my-12" name="experiences">
      <SectionTitle>Experiences</SectionTitle>
      <div className="space-y-6">
        <div className="flex items-center gap-12 p-4 border rounded-xl group hover:border-orange-500">
          <figure className="w-[500px]">
            <img
              src={imgExp1}
              alt="Complete Web Development Course With Jhankar Mahbub"
              className="w-[500px] h-[300px] object-cover rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-right">
            <a
              href="https://web.programming-hero.com/home"
              className="hover:underline">
              <h2 className="text-4xl font-semibold">
                Complete Web Development Course
              </h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              Programming Hero / 2023 - Present
            </h3>
            <p>
              This Course Is Created For Those Who Want To Learn Web Development
              From Scratch And Build A Career As A Web Developer In Software
              Companies. Even Those Who Studied CSE For Four Years But
              Didn&apos;t Learn Much And Couldn&apos;t Decide What To Do, Can
              Complete Web Development From This Course And Apply For Jobs.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-12 p-4 border rounded-xl group hover:border-orange-500">
          <figure className="w-[500px]">
            <img
              src={imgExp2}
              alt="Master HTML and CSS by building real world projects"
              className="w-[500px] h-[300px] object-cover rounded-lg group-hover:rotate-1 group-hover:-skew-x-1 group-hover:-skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-6 flex-1">
            <a
              href="https://www.udemy.com/course/master-html-and-css-by-building-real-world-projects/"
              className="hover:underline">
              <h2 className="text-4xl font-semibold">Master HTML and CSS</h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              Udemy (Anisul Islam) / 2023
            </h3>
            <p>
              Learn css, flex, grid, web accessibility, responsiveness, BEM
              architecture, animation by building e-commerce project
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12 p-4 border rounded-xl group hover:border-orange-500">
          <figure className="w-[500px]">
            <img
              src={imgExp3}
              alt="Master Git and Github - Beginner to Expert"
              className="w-[500px] h-[300px] object-cover rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-6 flex-1 text-right">
            <a
              href="https://www.udemy.com/course/git-and-github-for-absolute-beginners/"
              className="hover:underline">
              <h2 className="text-4xl font-semibold">Master Git and Github</h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              Udemy (Anisul Islam) / 2023
            </h3>
            <p>
              Learn git configuration, commit, branching, merging, contributing
              and collaboration with other&apos;s project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
