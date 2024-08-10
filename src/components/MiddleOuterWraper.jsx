import React from "react";

export default function MiddleOuterWraper({ children }) {
  return (
    <div className="col-md-7 offset-md-2" style={{ height: "100vh", overflowY: "auto" }}>
      <div className="content-area">{children}</div>
    </div>
  );
}
