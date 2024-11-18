import React from "react";

const CommonDropdown = ({
  options = [],
  className = "",
  value,
  onChange,
  name,
  id,
  placeholder = "Select an option",
  error,
  onBlur,
  ...rest
}) => {
  return (
    <>
      <select
        className={`px-4 py-2 border rounded-[8px] ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </>
  );
};

export default CommonDropdown;
