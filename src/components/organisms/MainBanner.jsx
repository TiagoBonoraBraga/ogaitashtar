import Image from "next/image"
export default function MainBanner() {
    return (
        <>
            <section className="flex flex-row justify-center items-center bg-white-500 ">
                <div className="flex flex-row items-center mt-16 w-full bg-black-500 ss:flex ss:flex-col ss:justify-center ss:items-center">
                    <div>
                        <Image
                            src="/tiago.jpg"
                            width={500}
                            height={500}
                            alt="Tiago Braga - Ogait Ashtar"
                        />
                    </div>
                    <div className="text-white-500 mb-96 ml-96 ss:ml-0">
                        <h1 className="py-10 text-4xl font-bold ">Ogait Ashtar</h1>
                        <p className="mr-10 text-justify">sfgsdfgsdfgsdfghsdfghsdfgsds</p>
                    </div>
                </div>
            </section>
           

        </>
    )
}