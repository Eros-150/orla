import React, { useState } from 'react';

const body = () => {
    const [images, setImages] = useState([
        {url: 'https://media.licdn.com/dms/image/D4D03AQEKGEJAYbfnPw/profile-displayphoto-shrink_200_200/0/1666113651999?e=1688601600&v=beta&t=wBo_S3GV1Si6_qnKSyh8JzCfyvsGsS4xu994OgqgTPc', description: 'Descripción de la imagen 1' }
    ]);


    return (
        <div>
          <h1>Image Board</h1>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.description} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      );
}

export default body;