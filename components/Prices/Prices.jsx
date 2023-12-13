import React from 'react'
import PriceItem from '../PriceItem/PriceItem'
const Prices = () => {
  return (
    <section className="flex items-center justify-center mt-10 pb-10">
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-gray-900 text-2xl font-semibold leading-8">Estándar</h3>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">al mes / por pantalla</p>
                <p className="mt-6 flex items-center gap-x-1 ">
                    <span className="text-5xl font-bold tracking-tight text-gray-900 text-center">$1.5</span>
                </p>
                <a href=""
                    aria-describedby="tier-standard"
                    className="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    target="_blank">Empezar</a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text="Spot de 10 segundos" />
                    <PriceItem text="72 repeticiones al dia" />
                    <PriceItem text="Contenido personalizado" />
                    <PriceItem text="Hasta 50 pantallas" />
                    <PriceItem text="Analytics" />
                </ul>
            </div>
            <div className="ring-2 ring-blue-600 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-extended" className="text-blue-600 text-2xl font-semibold leading-8">Plus</h3>
                    <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                        Más popular</p>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">al mes / por pantalla</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$2.5</span>
                </p>
                <a href=""
                    aria-describedby="tier-extended"
                    className="bg-blue-600 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    target="_blank">Empezar</a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text="Spot de 15 segundos" />
                    <PriceItem text="72 repeticiones al dia" />
                    <PriceItem text="Encuestas en QR" />
                    <PriceItem text="POP en pantallas" />
                    <PriceItem text="Hasta 50 pantallas" />
                    <PriceItem text="Analytics" />
                </ul>
            </div>
    </div>
</section>
  )
}

export default Prices