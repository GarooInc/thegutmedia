import React from 'react'
import Image from 'next/image'
import Tittle from '@/components/Tittle/Tittle'
import ButtonDark from '@/components/ButtonDark/ButtonDark'
import ButtonNormal from '@/components/ButtonNormal/ButtonNormal'
import Subtitle from '@/components/Subtitle/Subtitle'
import logosArray from '@/logos'
import ClientLogos from '@/components/ClientLogos/ClientLogos'
import Prices from '@/components/Prices/Prices'
import Footer from '@/components/Footer/Footer'

const PrincipalPage = () => {
  return (
    <div className="w-full isolate px-8 pt-14 lg:px-10">
        <section id='/' className="w-full relative">
            <div className="flex md:flex-row flex-col py-28 md:min-h-screen">
                <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-4">
                    <Tittle title="Conexiones visuales para tu marca" />
                    <Subtitle text="Nuestras pantallas transforman espacios locales en oportunidades publicitarias." />
                    <ButtonDark text="Quiero promocionar mi marca" href="#/contact" />
                    <ButtonNormal text="Quiero promocionar en mi tienda" href="#/screens" />
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <Image
                        src="/assets/images/placeholder.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
        <section id='/screens' className="w-full ">
            <div className="flex md:flex-row flex-col py-10 md:py-20 gap-2">
                    <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-4">
                    <Tittle title="Nuestras pantallas en acción" />
                    <Subtitle text="Explora nuestras ubicaciones estratégicas en tiendas de barrio y pulperías, llevando la publicidad directamente a la cotidianidad de las comunidades. " />
                </div>
                <div className="flex justify-center items-center md:w-1/2 glassmorphism">
                <Image
                        src="/assets/images/placeholder.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </section>
        <section id='/clients' className="text-center w-full">
        <div className="flex flex-col py-10 md:py-20 gap-2">
            <div className="flex flex-col justify-center items-center gap-4">
                <Tittle title="Nuestros clientes" />
            </div>
            <ClientLogos logos={logosArray} />
        </div>
        </section>
        <section id='/prices' className="portfolio">
            <div className="flex flex-col py-10 md:py-20 gap-2">
                <div className="flex flex-col justify-center items-center gap-4">
                    <Tittle title="Precios" />
                </div>
                <Prices />
            </div>
        </section>
        <section id='/contact' className="w-full flex justify-center py-10">
            <div className="flex flex-col justify-center items-center md:w-2/3 gap-4 text-center">
                    <Tittle title="Con The Gut Media, tu marca cobra vida en cada tienda." center />
                    <ButtonDark text="Me interesa" href="#/contact" />
            </div>
        </section>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default PrincipalPage