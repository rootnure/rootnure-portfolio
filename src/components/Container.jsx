import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
