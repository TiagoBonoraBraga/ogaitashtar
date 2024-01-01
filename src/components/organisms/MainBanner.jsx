import Image from "next/image"
export default function MainBanner() {
    return (
        <>
            <section className="flex flex-row justify-center items-center bg-white-500 ">
                <div className="z-0 ss:z-0 flex flex-row  items-center mt-16 w-full  bg-black-500 ss:flex ss:flex-col ss:justify-center ss:items-center">
                    <div>
                        <Image
                            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
                            src="/tiago.jpg"
                            width={500}
                            height={500}
                            alt="Tiago Braga - Ogait Ashtar"
                        />
                    </div>
                    <div className="text-white-500 mb-96 ml-96">
                        <h1 className="py-10 text-4xl font-bold ">Ogait Ashtar</h1>
                        <p className="mr-10 text-justify">sfgsdfgsdfgsdfghsdfghsdfgsds</p>
                    </div>
                </div>
            </section>
            <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            OGAIT ASHTAR
                            <strong className="block font-extrabold text-white-500"> O INVERSO DAS COISAS </strong>
                        </h1>
                        <p className="mt-4 max-w-lg ss:text-xl/relaxed text-white-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" className="block w-full rounded bg-black-500 px-12 py-3 text-sm font-medium text-white-500 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-white-500 sm:w-auto">
                                Get Started
                            </a>
                            <a href="#" className="block w-full rounded bg-black-500 px-12 py-3 text-sm font-medium text-white-500 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}