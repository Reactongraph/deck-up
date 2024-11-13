import React from "react";

const CommonDropdown = ({
  options = [],
  className = "",
  value,
  onChange,
  name,
  id,
  placeholder = "Select an option",
  ...rest
}) => {
  return (
    <select
      className={`px-4 py-2 border rounded-[8px] ${className}`}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      {...rest} 
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CommonDropdown;
