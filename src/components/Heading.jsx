import PropTypes from "prop-types";
const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-xl md:text-2xl lg:text-4xl mb-4 font-thin">
        {title}
      </h1>
      <p className="text-xs md:text-base text-gray-600 font-thin">{subtitle}</p>
    </div>
  );
};

Heading.PropTypes = {
  PropTypes: PropTypes.object.isRequired,
};
export default Heading;
