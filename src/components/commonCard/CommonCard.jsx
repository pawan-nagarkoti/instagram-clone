import React from "react";

export default function CommonCard({ data }) {
  return (
    <>
      <div className="row photo-grid">
        {data.photos.map((photo, index) => (
          <div className="col-4 p-1" key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </>
  );
}
