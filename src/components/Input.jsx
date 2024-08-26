import React, { useId, forwardRef } from "react";

export default forwardRef(function Input({ label = "", type = "text", ...props }, ref) {
  const id = useId();
  return (
    <>
      <div className="mb-3 row align-items-center">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {label}
        </label>
        <div className="col-sm-9">
          <input type={type} className="form-control" id={id} ref={ref} {...props} />
        </div>
      </div>
    </>
  );
});
