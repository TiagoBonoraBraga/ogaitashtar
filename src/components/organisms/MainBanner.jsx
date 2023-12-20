import Image from "next/image"
import {mainBanner} from '@/mocks/mainBanner'
export default function MainBanner(mainBanner) {
    return (
        <>

        {}
            <section className="flex flex-row justify-center items-center bg-white-500 ">
                <div className="z-0 ss:z-0 flex flex-row justify-center items-center mt-16 w-full gap-20 bg-black-500 ss:flex ss:flex-col ss:justify-center ss:items-center">
                    <div>
                        <Image
                            src="/tiago.jpg"
                            width={3000}
                            height={3000}
                            alt="Tiago Braga - Ogait Ashtar"
                        />
                    </div>
                    <div className="text-white-500 mb-96">
                        <h1 className="py-10 text-4xl font-bold ">{title}</h1>
                        <p className="mr-10 text-justify">{description}</p>
                    </div>
                </div>

            </section>
            <section className="mb-40">
                <div className="z-0 ss:z-0 flex flex-row justify-center items-center mt-16 w-full gap-20 bg-black-500 ss:flex ss:flex-col ss:justify-center ss:items-center ">

                <div className="text-white-500 mb-96 ml-14">
                        <h1 className="py-10 text-4xl font-bold ">{title}</h1>
                        <p className="mr-10 text-justify">{description}</p>
                    </div>
                    <Image
                        src="/tiago.jpg"
                        width={3000}
                        height={3000}
                        alt="Tiago Braga - Ogait Ashtar"
                         />


                </div>
            </section>

        </>
    )
}