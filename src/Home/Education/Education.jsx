import SectionTitle from "../../components/SectionTitle";

import img1 from "../../assets/photos/DIU.png";
import img2 from "../../assets/photos/bepza.jpg";
import img3 from "../../assets/photos/bksplogo.png";

const Education = () => {
  return (
    <section className="my-12" name="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {/* Programming Hero (Batch 8) */}
        <div className="flex items-center gap-12 p-4 border rounded-xl border-white group hover:border-orange-500">
          <figure className="w-[500px] h-[300px]">
            <img
              src={img1}
              alt="Complete Web Development Course With Jhankar Mahbub"
              className="max-w-full max-h-full rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-6 flex-1 text-right">
            <a
              href="https://daffodilvarsity.edu.bd/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer">
              <h2 className="text-4xl font-semibold">
                B.Sc. in Computer Science and Engineering
              </h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              Daffodil International University / 2019 - 2023
            </h3>
            <p>CGPA: 3.62 (out of 4.00)</p>
          </div>
        </div>
        {/* Udemy HTML and CSS */}
        <div className="flex flex-row-reverse items-center gap-12 p-4 border rounded-xl border-white group hover:border-orange-500">
          <figure className="w-[500px] h-[300px]">
            <img
              src={img2}
              alt="Master HTML and CSS by building real world projects"
              className="max-h-full max-w-full rounded-lg group-hover:rotate-1 group-hover:-skew-x-1 group-hover:-skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1">
            <a
              href="https://www.bpscdepz.edu.bd/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer">
              <h2 className="text-4xl font-semibold">
                Higher Secondary Certificate (H.S.C)
              </h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              BEPZA Public College / 2018
            </h3>
            <p>GPA: 3.67 (out of 5.00)</p>
          </div>
        </div>
        {/* Udemy Git and GitHub */}
        <div className="flex items-center gap-22 p-4 border rounded-xl border-white group hover:border-orange-500">
          <figure className="w-[500px] h-[300px]">
            <img
              src={img3}
              alt="Master Git and Github - Beginner to Expert"
              className="max-w-full max-h-full rounded-lg group-hover:-rotate-1 group-hover:skew-x-1 group-hover:skew-y-1 group-hover:scale-[95%] duration-150"
            />
          </figure>
          <div className="space-y-4 flex-1 text-right">
            <a
              href="https://bkspps.edu.bd/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline">
              <h2 className="text-4xl font-semibold">
                Secondary School Certificate (S.S.C)
              </h2>
            </a>
            <h3 className="text-2xl font-medium text-gray-500">
              BKSP Public School / 2016
            </h3>
            <p>GPA: 4.50 (out of 5.00)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
