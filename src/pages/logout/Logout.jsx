import React from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";

export default function Logout() {
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <h5>Middle Content</h5>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
