import PropTypes from "prop-types";

function LogoCoding({ className, style }) {
  return (
    <img
      className={`w-12 ${className}`}
      src="/images/coding.svg"
      alt="coding"
      style={style}
    />
  );
}

export default LogoCoding;

LogoCoding.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
