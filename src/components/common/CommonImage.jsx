import React from "react";

const CommonImage = ({ src, alt, className, onClick = () => {} }) => {
  return <img src={src} alt={alt} className={className} onClick={onClick} />;
};

export default CommonImage;
