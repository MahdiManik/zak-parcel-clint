import PropTypes from "prop-types";

export function Title({ heading }) {
  return (
    <div className="my-6 py-3 flex items-center justify-center bg-orange-500 rounded-lg text-white text-4xl font-semibold">
      {heading}
    </div>
  );
}
Title.propTypes = {
  heading: PropTypes.string,
};
