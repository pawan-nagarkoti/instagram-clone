import React from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";

export default function Message() {
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <h5>Message box</h5>
          <p>Development in progress!</p>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
