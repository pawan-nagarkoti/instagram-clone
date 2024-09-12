import React from "react";
import "./commonCard.scss";

export default function CommonCard({ data }) {
  return (
    <>
      <div className="col-4 p-1">
        <img src={data?.images[0]?.url ? data?.images[0]?.url : "https://via.placeholder.com/300"} alt={`Photo`} className="img-fluid card-height" />
      </div>
    </>
  );
}
