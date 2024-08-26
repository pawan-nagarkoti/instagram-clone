import React, { forwardRef, useId } from "react";

export default forwardRef(function Dropdown({ options = [], label, defaultValue = "", ...props }, ref) {
  const id = useId();
  return (
    <>
      <div className="mb-3 row align-items-center">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {label}
        </label>
        <div className="col-sm-9">
          <select className="form-select" ref={ref} {...props} defaultValue={defaultValue}>
            <option value="" disabled>
              Select the dropdown value
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
});
