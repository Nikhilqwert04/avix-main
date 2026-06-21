import React from "react";

const Navbar = () => {
  return (
    <div className="absolute -top-11 z-99 mt-10 hidden sm:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="83"
        viewBox="0 0 472 82.86"
      >
        <path
          fill="#000000"
          d="M 0,22.9 L 0,33.9 L 57.3,34.2 L 114.5,34.6 L 122.5,37.3 C 133.4,40.9 140.3,45.2 154.9,57.5 C 169.5,69.8 177.7,74.9 188,78.4 C 201,82.7 208.8,83.2 262,82.7 C 308.7,82.4 311.9,82.2 319.2,80.2 C 331.1,76.9 341.5,71.1 353.9,60.8 C 369.6,47.8 377.5,42.4 385,39.5 C 397.9,34.6 403,34 438.8,34 L 472,34 L 472,17 L 472,0 L 236,0 L 0,0 L 0,16.9 Z"
        />
      </svg>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="absolute -bottom-1 -left-50 z-99 mt-10 hidden rotate-180 sm:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="83"
        viewBox="0 0 472 82.86"
      >
        <path
          fill="#000000"
          d="M 0,22.9 L 0,33.9 L 57.3,34.2 L 114.5,34.6 L 122.5,37.3 C 133.4,40.9 140.3,45.2 154.9,57.5 C 169.5,69.8 177.7,74.9 188,78.4 C 201,82.7 208.8,83.2 262,82.7 C 308.7,82.4 311.9,82.2 319.2,80.2 C 331.1,76.9 341.5,71.1 353.9,60.8 C 369.6,47.8 377.5,42.4 385,39.5 C 397.9,34.6 403,34 438.8,34 L 472,34 L 472,17 L 472,0 L 236,0 L 0,0 L 0,16.9 Z"
        />
      </svg>
    </div>
  );
};

export default Navbar;
