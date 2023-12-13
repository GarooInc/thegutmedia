import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-white text-white h-64 flex flex-col justify-center items-center gap-4 py-8">
        <div className="flex flex-col w-full">
            <ul className="flex flex-col md:flex-row justify-evenly items-center gap-4 py-4">
                <a href="https://garooinc.com/"><li className="text-gray-600 text-sm">© 2023 GarooInc</li></a>
                <li className="text-gray-600 text-sm">Términos y condiciones</li>
                <li className="text-gray-600 text-sm">Política de privacidad</li>
            </ul>
            <div className="flex justify-center items-center p-8">
            <Image
                src="/assets/images/logogris.png"
                alt="Picture of the author"
                width={100}
                height={100}
                className='object-cover'
            />
            </div>
        </div>
    </div>
  )
}

export default Footer