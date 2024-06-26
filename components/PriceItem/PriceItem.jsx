import React from 'react'

const PriceItem = ({text}) => {
  return (
    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                            className="h-6 w-5 flex-none text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>{text}
                    </li>
  )
}

export default PriceItem