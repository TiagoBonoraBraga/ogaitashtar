import Link from "next/link"
export default function soloBanner() {
    return (
        <>
         <section className="relative bg-[url('/miracao.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
                    <div className="max-w-xl text-center ss:bg-black-500">
                        <h1 className="text-3xl font-extrabold  text-white-500 sm:text-5xl">
                            OGAIT ASHTAR
                            <strong className="block font-extrabold text-white-500 "> O INVERSO DAS COISAS </strong>
                        </h1>
                        <p className="mt-4 max-w-lg ss:text-xl/relaxed text-white-500 text-lg">
                            Album solo instrumental do guitarrista Curitibano Ogait Ashtar trazendo ritmos direto do astral para seus ouvidos!
                        </p>
                    </div>
                        <div className="mt-8 flex justify-center items-center text-center">
                            <Link
                                href="#"
                                className="block w-full rounded bg-black-500 px-28 py-3 text-sm font-medium text-white-500 shadow hover:text-white-500 hover:font-bold focus:outline-none focus:ring active:text-white-500 sm:w-auto"
                            >
                                Saiba mais
                            </Link>
                        </div>
                </div>
            </section>

        </>
    )
}