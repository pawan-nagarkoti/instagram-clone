import React, { useId, forwardRef } from "react";

export default forwardRef(function Textarea({ label = "", rows = "5", ...props }, ref) {
  const id = useId();
  return (
    <>
      <div className="mb-3 row align-items-center">
        <label htmlFor={id} className="col-sm-3 col-form-label">
          {label}
        </label>
        <div className="col-sm-9">
          <textarea className="form-control" rows={rows} id={id} ref={ref} {...props}></textarea>
        </div>
      </div>
    </>
  );
});
