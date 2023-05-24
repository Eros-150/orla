import React from "react";
import images from "../../assets/images/jsonImages/images.json";

const ImageGrid = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {images.map((image) => (
          <div
            key={image.id}
            className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4"
          >
            <div className="card h-75">
              <a href={image.web} target="_blank">
              <img src={image.imageUrl} className="card-img-top" />
              </a>
              <div className="card-body"></div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ImageGrid;
