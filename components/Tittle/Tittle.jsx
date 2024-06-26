import React from 'react';

const Tittle = ({ title, center }) => {
    return (
        <h1 className={`text-4xl m-0 font-bold tracking-tight text-gray-900 sm:text-6xl font-inter text-center ${center ? 'md:text-center' : 'md:text-start'}`}>
            {title}
        </h1>
    )
}

export default Tittle;
