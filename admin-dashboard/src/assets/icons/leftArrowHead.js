// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import colors from "../theme/base/colors";

function LeftArrowHead({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>LeftArrowHead</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1720.000000, -592.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="LeftArrowHead" transform="translate(4.000000, 301.000000)">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of icon
LeftArrowHead.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the icon
LeftArrowHead.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LeftArrowHead;
