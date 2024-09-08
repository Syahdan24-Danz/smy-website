import Proptypes from "prop-types";

function Judul({ children, className }) {
  return (
    <div>
      <h1 className={`${className}`}>{children}</h1>
    </div>
  );
}

export default Judul;

Judul.propTypes = {
  children: Proptypes.node.isRequired,
  className: Proptypes.string,
};

Judul.defaultProps = {
  children: "Judul",
  className: "",
};
