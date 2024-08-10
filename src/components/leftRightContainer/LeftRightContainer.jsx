import React from "react";

export default function LeftRightContainer({ children, position }) {
  const dynamicStyle = {
    left: position === "left" ? 0 : "",
    right: position === "right" ? 0 : "",
  };
  return (
    <>
      <div className="col-md-2 position-fixed h-100 px-0" style={dynamicStyle}>
        <div className="p-3 bg-light border h-100 d-flex flex-column">
          <h5>Left Sidebar</h5>
          <div style={{ overflowY: "auto", flex: 1 }}>{children}</div>
        </div>
      </div>
    </>
  );
}
