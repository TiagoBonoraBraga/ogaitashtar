import Head from 'next/head';



export default function SeoHead() { 

    return (
        <Head>          
            <title>OGAIT ASHTAR</title>
            <meta name="robots" content='follow, index' />
            <meta content='OGAIT ASHTAR - Conheça o trabalho o do guitarrista Curitibano Ogait Ashtar' name="description" />
            <meta property="og:url" content='https://ogaitashtar.cia.tv/' />
            <link rel="canonical" href='https://ogaitashtar.cia.tv/' />
            <meta name="application-name" content='OGAIT ASHTAR' />
            <meta name="author" content="Tiago Dev" />
            <link rel="author" href="https://ogaitashtar.cia.tv/" />
            <meta
                name="keywords"
                content="Stoner, rock, alternatice rock, psicodelic, hard"
            />
            <meta name="referrer" content="origin-when-cross-origin" />
            <meta name="creator" content="Ogait Ashtar" />
            <meta name="publisher" content="Tiago Dev - Tiago Braga" />
            <link rel="canonical" href="https://ogaitashtar.cia.tv/" />
            <link
                rel="alternate"
                hreflang="pt-BR"
                href="https://ogaitashtar.cia.tv/pt-BR"
            />
            <link
                rel="alternate"
                hreflang="en-US"
                href="https://ogaitashtar.cia.tv/en-US"
            />
            <meta
                property="og:image"
                content="https://github.com/TiagoBonoraBraga.png"
            />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content='Ogait Ashtar' />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://ogaitashtar.cia.tv/" />
            <meta property="og:description" content="OGAIT ASHTAR - Conheça o trabalho o do guitarrista Curitibano Ogait Ashtar" />
            <meta property="og:title" content='OGAIT ASHTAR' />
            <meta
                property="og:image:url"
                content="https://github.com/TiagoBonoraBraga.png"
            />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta
                property="og:image:url"
                content="https://github.com/TiagoBonoraBraga.png"
            />
            <meta property="og:image:width" content="1800" />
            <meta property="og:image:height" content="1600" />
            <meta property="og:image:alt" content="OGAIT ASHTAR" />
            <meta name="image" property="og:image" content="https://github.com/TiagoBonoraBraga.png" />
            <meta name="robots" content="follow, nocache" />
            <meta
                name="googlebot"
                content="index, follow, imageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
            />
            <link
                rel="shortcut icon"
                href="https://github.com/TiagoBonoraBraga.png"
            />
            <link
                rel="icon"
                href="https://github.com/TiagoBonoraBraga.png"
            />
            <link
                rel="apple-touch-icon"
                href="https://github.com/TiagoBonoraBraga.png"
            />
            <link
                rel="apple-touch-icon-precomposed"
                href="https://github.com/TiagoBonoraBraga.png"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta name="google-site-verification" content="google" />
          
        </Head>
    )
}