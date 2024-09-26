import React from "react";

const CommonButton = ({
  className,
  onClick = () => {},
  type = "button",
  text = "",
  variant = "",
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 ${className} rounded-full`}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </button>
  );
};

export default CommonButton;
