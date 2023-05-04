import React from 'react';

const body = ({image, title, description}) => {
    return (
        <div className='card'>
            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>
        </div>   
    )
}

export default body;