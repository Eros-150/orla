import React from 'react';
import '../css/imageGrid.css';
import students from '../assets/students.json';
import images from '../assets/images.json';

const ImageGrid = () => {
    return (
        <div className="container">
            <div className="row">
                {images.map((image) => (
                    <div key={image.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <div className="card h-75">
                        <img src={image.imageUrl} className="card-img-top" />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                    
                ))}
                {/* {students.map((image) => (
                    <div key={image.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                        <div className="card h-100">
                            <img src={image.imageUrl} className="card-img-top" alt={image.title} />
                            <div className="card-body">
                                <h5 className="card-title">{image.title}</h5>
                                <p className="card-text">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
                
            </div>
        </div>
    );
};

export default ImageGrid;
