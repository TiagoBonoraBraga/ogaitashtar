import Link from "next/link"
import CustomH1 from "../../atoms/CustomH1"

export default function MainsoloBanner() {
    return (
        <>
        
            {/* <!-- Container da imagem com gradiente --> */}
            {/* <div className="relative bg-[url('/miracao.jpg')] bg-cover bg-center h-48 gradient-overlay text-white"> */}
                {/* <!-- Conteúdo dentro da área da imagem --> */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Seu Título Aqui</h1>
                </div>
            </div> */}

            <section className=" bg-[url('/images/capaOgait2.png')] bg-cover bg-center bg-no-repeat  ">
                <div className="relative flex justify-end items-end mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
                    <div className=" max-w-xl text-center ss:bg-black-500 ">                       
                        <h1 className="text-2xl font-extrabold  text-black-500 sm:text-5xl">
                            OGAIT ASHTAR
                            <strong className="block font-thin text-black-500  "> O INVERSO DAS COISAS </strong>
                        </h1>
                        <p className="mt-4 max-w-lg ss:text-xl/relaxed text-black-500 text-lg">
                            Album solo instrumental do guitarrista Curitibano Ogait Ashtar trazendo ritmos direto do astral para seus ouvidos!
                        </p>
                        <div className="mt-8 flex justify-center items-center text-center">
                            <Link
                                href="#"
                                className="block w-full rounded bg-blue-500 px-28 py-3 text-sm font-medium text-white-500 shadow hover:text-white-500 hover:font-bold focus:outline-none focus:ring active:text-white-500 sm:w-auto"
                            >
                                Saiba mais
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}