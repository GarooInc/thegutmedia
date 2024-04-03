import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="w-full bg-white text-white h-64 flex flex-col justify-center items-center gap-4 pt-20">
        <div className="flex flex-col w-full">
            <ul className="flex flex-col justify-evenly items-center gap-4 py-4 text-center font-inter">
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4 w-full'>
                  <li className="text-gray-600 text-md gap-2 flex items-center "> 
                    <FaLocationDot className="lg:inline-block text-gray-600 text-sm hidden" />
                      15 ave 5-50 VH3
                      Oficina 505, Edificio Spazio
                      Zona 15
                      Guatemala 
                  </li>
                  <li className="text-gray-600 text-md gap-2 flex items-center">
                    <FaPhone className="inline-block text-gray-600 text-md" />
                   <a href="tel:+502 2424-9422">PBX: +502 2424-9422</a>
                  </li>
                  <li className="text-gray-600 text-md gap-2 flex items-center">
                    <FaEnvelope className="inline-block text-gray-600 text-md" />
                    <a href="mailto:info@thegutmedia.com">
                      info@thegutmedia.com
                    </a>
                  </li>
                </div>
                <a href="https://garooinc.com/" className='w-full'><li className="text-gray-600 text-md">© 2023 GarooInc</li></a>
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