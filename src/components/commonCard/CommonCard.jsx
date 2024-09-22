import React from "react";
import "./commonCard.scss";
import NotFoundImage from "../../assets/images/notFound.png";

export default function CommonCard({ data }) {
  return (
    <>
      <div className="col-4 p-1">
        <img src={data?.images[0]?.url ? data?.images[0]?.url : NotFoundImage} alt={`Photo`} className="img-fluid card-height" />
      </div>
    </>
  );
}
