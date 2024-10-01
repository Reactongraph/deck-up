import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Forward the ref to access the slider instance
const CommonSlider = forwardRef(({ settings, children }, ref) => {
  return <Slider ref={ref} {...settings}>{children}</Slider>;
});

export default CommonSlider;
