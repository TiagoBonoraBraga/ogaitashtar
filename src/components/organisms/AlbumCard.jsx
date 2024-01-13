import CustomImage from "../atoms/CustomImage";
export default function AlbumCard() {
    return (
        <>
            <section className="max-w-[1400px] h-[600px] ring-1 ring-black-500 w-full m-auto py-10 px-4 mt-40 rounded-sm   ">
                <div className="relative group">
                    <div className="flex justify-start items-start ring-1 ring-black-500 mb-5 rounded-sm">
                        <h1 className="ml-3 cursor-pointer">Nome - Titulo</h1>
                    </div>
                    <div className=" hidden group-hover:block flex-row ring-1 ring-black-500 gap-5 py-5 px-5 rounded-sm">
                        <div className="flex flex-row gap-5">
                            <div>
                                <CustomImage
                                    src=""
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="flex flex-col w-full mr-5">
                                <div className="flex flex-row justify-start ">
                                    <div className="flex flex-row justify-start gap-5 ">
                                        <h2 className="ring-1 ring-black-500 rounded-sm px-1 py-1 w-60">Nome - Titulo</h2>
                                        <span className="ring-1 ring-black-500 rounded-sm px-1 py-1">Ano de lançamento</span>
                                    </div>
                                </div>
                                <div className=" ring-1 ring-black-500 rounded-sm mt-4">
                                    <p className="flex justify-start px-1 py-1">Description</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="hidden group-hover:block justify-evenly items-center ring-1 ring-black-500 gap-5 py-5 px-5  rounded-sm mt-5">
                        <div className="flex flex-row justify-evenly gap-5">
                            <div>
                                <iframe
                                    width="300"
                                    height="200"
                                    src="https://www.youtube.com/embed/tXlZCW26bto?si=h1_ElrWGpn1yD2DA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>
                                <h3 className="flex justify-center items-center py-2">Full Album</h3>
                            </div>
                            <div>
                                <ul>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                    <li>Nome da Musica</li>
                                </ul>
                            </div>
                            <div>
                                <iframe
                                    width="300"
                                    height="200"
                                    src="https://www.youtube.com/embed/tXlZCW26bto?si=h1_ElrWGpn1yD2DA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>
                                <h3 className="flex justify-center items-center py-2">Video Clip</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
        </>
    )
}