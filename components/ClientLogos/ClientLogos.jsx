import React from 'react';
import Image from 'next/image';

const ClientLogos = ({ logos }) => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {logos.map((logo, index) => (
          <div className='flex flex-col items-center' key={index}>
            <Image
              src={logo.logo}
              alt={logo.name}
              width={100}
              height={100}
              className='object-contain w-24 h-24 rounded-lg bg-white p-2'
            />
            <p className='text-center text-sm  font-inter text-light-grayish'>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
