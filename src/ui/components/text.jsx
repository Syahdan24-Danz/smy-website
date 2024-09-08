import Proptypes from "prop-types";

function Text({ children, className }) {
  return <p className={`${className} w-full`}>{children}</p>;
}

export default Text;

Text.propTypes = {
  children: Proptypes.node.isRequired,
  className: Proptypes.string,
};

Text.defaultProps = {
  children: null,
  className: "",
};
