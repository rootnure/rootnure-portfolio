import SectionTitle from "../../components/SectionTitle";
import "./Skills.css";

const Skills = () => {
  const skillsIKnow = [
    { name: "JavaScript", value: 90 },
    { name: "HTML", value: 95 },
    { name: "CSS", value: 95 },
    { name: "React", value: 85 },
    { name: "Tailwind", value: 90 },
    { name: "Firebase", value: 75 },
    { name: "Express", value: 75 },
    { name: "MongoDB", value: 75 },
    { name: "Node.Js", value: 60 },
  ];
  const skillsFamiliarWith = [
    { name: "PHP", value: 60 },
    { name: "Python", value: 45 },
    { name: "Java", value: 50 },
    { name: "jQuery", value: 60 },
    { name: "Bootstrap", value: 70 },
    { name: "MySQL", value: 60 },
    { name: "C", value: 80 },
  ];
  const skillsTools = [
    { name: "VS Code", value: 85 },
    { name: "Git", value: 75 },
    { name: "GitHub", value: 80 },
    { name: "Vercel", value: 50 },
    { name: "Surge", value: 50 },
    { name: "Code::Blocks", value: 70 },
  ];
  return (
    <section className="my-24" name="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="mb-12">
        <h3 className="text-3xl pt-6 pb-12 font-medium text-center">
          ---Technologies That I Know---
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsIKnow.map(({ name, value }) => (
            <div key={name} className="grid grid-cols-12 items-center gap-6">
              <h3 className="text-xl font-bold col-span-3 text-center">
                {name}
              </h3>
              <meter value={value / 100} className="w-full col-span-7" />
              <p className="col-span-2">{value}/100</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-6 py-12 font-medium text-center">
          ---Technologies I Am Familiar With---
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsFamiliarWith.map(({ name, value }) => (
            <div key={name} className="grid grid-cols-12 items-center gap-6">
              <h3 className="text-xl font-bold col-span-3 text-center">
                {name}
              </h3>
              <meter value={value / 100} className="w-full col-span-7" />
              <p className="col-span-2">{value}/100</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-6 py-12 font-medium text-center">
          ---Software and Tools---
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsTools.map(({ name, value }) => (
            <div key={name} className="grid grid-cols-12 items-center gap-6">
              <h3 className="text-xl font-bold col-span-3 text-center">
                {name}
              </h3>
              <meter value={value / 100} className="w-full col-span-7" />
              <p className="col-span-2">{value}/100</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
