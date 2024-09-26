import React from "react";

const CommonImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default CommonImage;
