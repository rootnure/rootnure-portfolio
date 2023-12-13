import SectionTitle from "../../components/SectionTitle";

import img1 from "../../assets/photos/DIU.png";
import img2 from "../../assets/photos/bepza.png";
import img3 from "../../assets/photos/bksplogo.png";

const Education = () => {
  return (
    <section className="" name="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {/* B.Sc */}
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[400px] h-[300px] flex justify-center p-6">
            <img
              src={img1}
              alt="Complete Web Development Course With Jhankar Mahbub"
              className="max-w-full max-h-full rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-6 flex-1 text-center lg:text-right">
            <a
              href="https://daffodilvarsity.edu.bd/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                B.Sc. in Computer Science and Engineering
              </h2>
            </a>
            <h3 className="text-base md:text-lg lg:text-2xl font-medium text-gray-500">
              Daffodil International University / 2019 - 2023
            </h3>
            <h4 className="font-semibold text-lg">CGPA: 3.68 (out of 4.00)</h4>
          </div>
        </div>
        {/* H.S.C */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[400px] h-[300px] flex justify-center p-6">
            <img
              src={img2}
              alt="Master HTML and CSS by building real world projects"
              className="max-h-full max-w-full rounded-lg group-hover:rotate-1 group-hover:-skew-x-1 group-hover:-skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-center lg:text-left">
            <a
              href="https://www.bpscdepz.edu.bd/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Higher Secondary Certificate (H.S.C)
              </h2>
            </a>
            <h3 className="text-base md:text-lg lg:text-2xl font-medium text-gray-500">
              BEPZA Public College / 2018
            </h3>
            <h4 className="font-semibold text-lg">GPA: 3.67 (out of 5.00)</h4>
          </div>
        </div>
        {/* S.S.C */}
        <div className="flex flex-col lg:flex-row items-center gap-22 px-6 border-2 rounded-xl border-white group hover:border-orange-500">
          <figure className="lg:w-[400px] h-[300px] flex justify-center p-6">
            <img
              src={img3}
              alt="Master Git and Github - Beginner to Expert"
              className="max-w-full max-h-full rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-center lg:text-right">
            <a
              href="https://bkspps.edu.bd/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Secondary School Certificate (S.S.C)
              </h2>
            </a>
            <h3 className="text-base md:text-lg lg:text-2xl font-medium text-gray-500">
              BKSP Public School / 2016
            </h3>
            <h4 className="font-semibold text-lg">GPA: 4.50 (out of 5.00)</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
