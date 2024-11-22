import React from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";
import SideBar from "./sideBar";
import ChatScreen from "./chatScreen";

export default function Message() {
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper isGapRemove={true}>
          <div style={{ display: "flex", height: "100vh" }}>
            <SideBar />
            <ChatScreen />
          </div>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
