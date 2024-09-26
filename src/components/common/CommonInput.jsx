import React from "react";

const CommonInput = ({
  type = "text",
  className = "",
  value,
  placeholder,
  onChange,
  name,
  id,
  ...rest
}) => {
  return (
    <input
      type={type}
      className={`px-4 py-2 border rounded-[8px] ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      id={id}
      {...rest} // Spread any other props passed to the input
    />
  );
};

export default CommonInput;
