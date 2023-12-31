import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div className="relative text-center h-20 md:h-28 lg:h-36">
      <h2 className="absolute top-0 left-0 right-0 text-4xl lg:text-5xl font-bold z-10">
        ~~~ {children} ~~~
      </h2>
      <h1 className="absolute top-4 text-5xl lg:text-[80px] text-slate-100 left-0 right-0 font-medium prevent-select z-0">
        {children}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
