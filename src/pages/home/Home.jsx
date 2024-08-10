import React from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, InstaCard } from "../../components";

export default function Home() {
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <InstaCard />
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
