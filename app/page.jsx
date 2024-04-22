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
    <div className="w-full isolate px-8 lg:px-20 pt-10 ">
        <section id='/' className="w-full pt-20 lg:pt-40">
            <div className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-4">
                    <Tittle title="Experiencias visuales" />
                    <Subtitle text="En Tiendas de Barrio, nuestras pantallas digitales se convierten en oportunidades publicitarias." />
                    <ButtonDark text="Quiero promocionar mi marca" href="https://wa.link/rz4mpr" />
                    <ButtonNormal text="Quiero promocionar en mi tienda" href="https://wa.link/rz4mpr" />
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <Image
                        src="/assets/images/mostrador.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
        <section id='/screens' className="w-full py-10">
            <div className="flex md:flex-row flex-col-reverse  gap-2">
                <div className="flex justify-center items-center md:w-1/2 ">
                    <Image
                            src="/assets/images/tienda.png"
                            alt="Picture of the author"
                            width={600}
                            height={600}
                        />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-4">
                    <Tittle title="Explora nuestras ubicaciones estratégicas" />
                    <Subtitle text="Complementamos la publicidad tradicional comunicando directamente al consumidor en el momento de compra." />
                </div>
            </div>
        </section>
        <section id='/clients' className="text-center w-full py-10 hidden">
            <div className="flex flex-col  gap-2">
                <div className="flex flex-col justify-center items-center gap-4">
                    <Tittle title="Nuestros clientes" />
                </div>
                <ClientLogos logos={logosArray} />
            </div>
        </section>
        <section id='/prices' className="hidden">
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
                    <ButtonDark text="Me interesa" href="https://wa.link/rz4mpr" />
            </div>
        </section>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default PrincipalPage