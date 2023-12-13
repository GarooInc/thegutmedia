import React from 'react';
const Tittle = ( {title,center} ) => {
    return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter text-center md:text-start " style={center ? {textAlign: 'center'} : {textAlign: 'left'}}>
        {title}
    </h1>
    )
}

export default Tittle