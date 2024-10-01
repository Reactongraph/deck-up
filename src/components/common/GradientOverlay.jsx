import React from "react";

const GradientOverlay = ({
  width = "140px",
  height = "140px",
  gradient = "linear-gradient(to bottom, #bfdbfe, #e0f2fe, #dbeafe)",
  borderRadius = "50%",
  position = "absolute",
  top,
  bottom,
  left,
  right,
  zIndex = "",
  transform = "",
}) => {
  const style = {
    width,
    height,
    background: gradient,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
    transform,
  };

  return <div style={style} />;
};

export default GradientOverlay;
