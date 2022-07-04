// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import colors from "../theme/base/colors";

function ImageGallery({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>ImageGallery</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1720.000000, -592.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="ImageGallery" transform="translate(4.000000, 301.000000)">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of icon
ImageGallery.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the icon
ImageGallery.propTypes = {
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

export default ImageGallery;
