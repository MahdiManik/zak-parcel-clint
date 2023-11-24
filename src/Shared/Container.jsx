import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="my-12 px-4">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
