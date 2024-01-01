import Image from "next/image";
import Link from "next/link";
import { cards } from "@/mocks/Cards"

export default function CardMain() {
    return (
        <>

            <section className="flex flex-wrap justify-center items-center p-20 gap-5">
                {cards.map((card, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <Image
                            className="rounded-t-lg"
                            src={card.image}
                            alt="capa do cd"
                            width={400}
                            height={300}
                        />

                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description} </p>
                            <Link href={card.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-500 bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-4 00">
                                Saiba mais
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                ))}
            </section>



        </>
    )
}