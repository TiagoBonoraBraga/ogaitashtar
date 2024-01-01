import Image from "next/image"
export default function MainBanner() {
    return (
        <>
            <section className="flex flex-row justify-center items-center bg-white-500 ">
                <div className="flex flex-row items-center mt-16 w-full bg-black-500 ss:flex ss:flex-col ss:justify-center ss:items-center">
                    <div className="ml-20 ss:ml-0">
                        <Image
                            src="/guitaespada.jpg"
                            width={700}
                            height={700}
                            alt="Tiago Braga - Ogait Ashtar"
                        />
                    </div>
                    <div className="text-white-500 ss:mb-40 ml-48 ss:ml-0 w-2/3">
                        <h1 className="py-10 text-8xl ss:text-4xl font-bold ss:flex ss:justify-center ss:items-center ">Ogait Ashtar</h1>
                        <p className="mr-10 ss:mr-0 text-justify ss:w-64">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
            </section>
           

        </>
    )
}