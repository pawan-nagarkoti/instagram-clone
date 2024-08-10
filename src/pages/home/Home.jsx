import React from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";

export default function Home() {
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <h5>Middle Content</h5>
          <p>Scroll down to see the effect. This section should scroll while the sidebars remain fixed.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>More content...</p>
          {/* Add more content as needed */}
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
