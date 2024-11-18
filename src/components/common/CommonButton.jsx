import React from "react";

const CommonButton = ({
  className,
  onClick = () => {},
  type = "button",
  text = "",
  variant = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 ${className} rounded-full hover:bg-hoverButton`}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CommonButton;
