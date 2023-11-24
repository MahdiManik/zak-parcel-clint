import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/6 text-center mx-auto pb-10">
      <h3 className="border-b-4 py-4 text-3xl font-semibold uppercase">
        {heading}
      </h3>
      <p className="mt-3">{subHeading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
