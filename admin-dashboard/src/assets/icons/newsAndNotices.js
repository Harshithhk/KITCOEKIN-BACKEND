// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import colors from "../theme/base/colors";

function NewsAndNotices({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>NewsAndNotices</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1720.000000, -592.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="spaceship" transform="translate(4.000000, 301.000000)">
            <path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" />            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of icon
NewsAndNotices.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the icon
NewsAndNotices.propTypes = {
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

export default NewsAndNotices;
