import React from "react";

export default function MiddleOuterWraper({ children, isGapRemove = false }) {
  return (
    <div className={`col-md-7 offset-md-2 ${isGapRemove ? "p-0" : ""}`} style={{ height: "100vh", overflowY: "auto" }}>
      <div className={`content-area ${isGapRemove ? "m-0" : "my-5"}`}>{children}</div>
    </div>
  );
}
