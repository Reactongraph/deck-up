import React, { useEffect } from "react";

const CommonInput = ({
  type = "text",
  className = "",
  value,
  placeholder,
  onChange,
  name,
  id,
  error,
  disabled = false,
  inputRef = null,
  freeTrialInputFocus = false,
  setFreeTrialInputFocus,
  ...rest
}) => {

  useEffect(() => {
    if (freeTrialInputFocus) {
      inputRef.current.focus();
      setTimeout(() => setFreeTrialInputFocus(false), 100); 
    }
  }, [freeTrialInputFocus, inputRef]);

  return (
    <>
      <input
        ref={inputRef}
        type={type}
        className={`px-4 py-2 border rounded-[8px] ${className}
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
        `}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        {...rest} // Spread any other props passed to the input
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </>
  );
};

export default CommonInput;
