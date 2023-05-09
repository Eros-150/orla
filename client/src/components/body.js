import React from 'react';

const body = ({ image, title, description }) => {
    return (
        <div className='card'>
            <img src={"https://media.licdn.com/dms/image/D4D03AQEKGEJAYbfnPw/profile-displayphoto-shrink_200_200/0/1666113651999?e=1689206400&v=beta&t=mo2juFmxD_RnawCDLdAoZu_plvDkMNxn5ZitbYV2LkM"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno1{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno2{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno3{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno4{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno5{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <img src={"../src/assets/logo.png"} alt={title} />
            <div className='card-body'>
                <h5 className='card-title'>Nombre del alumno6{title}</h5>
                <p className='card-text'>Descripción{description}</p>
            </div>

            <div className='info'>
                <table>
                    <tr>
                        <td><strong>Nombre:</strong></td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td><strong>Edad:</strong></td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><strong>Correo electrónico:</strong></td>
                        <td>john.doe@example.com</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default body;