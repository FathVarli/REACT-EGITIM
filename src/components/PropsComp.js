import PropTypes from "prop-types";

const PropsComp = ({ id, name }) => {
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
    </>
  );
};

export default PropsComp;

// PropsComp.propTypes = {
//   name: PropTypes.string,
//   id: PropTypes.bool,
// };

// PropsComp.defaultProps = {
//   name: PropTypes.string,
//   id: false,
// };
