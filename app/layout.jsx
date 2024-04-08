import "@/styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;


export const metadata = {
    title: 'The Gut Media',
    description: 'Conexiones visuales para tu marca',
    url: 'thegutmedia.com',
    image: '/assets/images/Favicon.png',
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
            `}
            </Script>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/png+xml" href="/assets/images/Favicon.png" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta name="keywords" content="diseño web, desarrollo web, web en Guatemala, páginas web, "></meta>            
        </head>
        <body>
            <main className='app'>
                <NavBar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout