import CustomH3 from "../atoms/CustomH3";
import CustomIframe from "../atoms/CustomIframe";
import CustomImage from "../atoms/CustomImage";
import CustomName from "../atoms/CustomName";
import CustomP from "../atoms/CustomP";
import { frontImages } from "@/mocks/Productions";

export default function AlbumCard() {
    return (
        <>
            <section className="ss:w-auto">
                <div className="h-36">kkk</div>
                {frontImages.map((frontImage, index) => (
                    <section key={index} className="ring-1 ring-black-500 max-w-[1400px] h-auto w-full m-auto p-4 rounded-sm mb-20 bg-black-500/30">
                        <div className="relative group">
                            <div className="flex flex-row justify-start items-center ring-1 ring-black-500 mb-2 rounded-sm bg-white-500 ">
                                <CustomImage
                                    src={frontImage.image1}
                                    alt={frontImage.alt1}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <CustomName name={frontImage.title_band} />
                                </div>
                            </div>
                            <div className="  flex flex-row ring-1 ring-black-500 gap-5 py-5 px-5 rounded-sm bg-white-500">
                                <div className="flex flex-row ss:flex-col gap-5 ss:gap-0 ">
                                    <div>
                                        <CustomImage
                                            src={frontImage.image1}
                                            alt={frontImage.alt1}
                                            width={350}
                                            height={300}
                                            
                                        />
                                    </div>
                                    <div className="flex flex-col ring-1 ring-black-500 w-full mr-5 p-3 rounded-sm">
                                        <div className="flex flex-row justify-start ">
                                            <div className="flex flex-row ss:flex-col justify-start gap-5 ">
                                                <h2 className=" rounded-sm px-1 py-1 w-60 font-bold ">{frontImage.name_album}</h2>
                                                <span className=" rounded-sm px-1 py-1"><strong>Ano de Lançamento -</strong> {frontImage.year}</span>
                                            </div>
                                        </div>
                                        <div className="rounded-sm mt-4">
                                            <CustomP description={frontImage.description} />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 font-bold">Ficha Técnica</h3>
                                            <h4><strong>Bass e Vocals -</strong> {frontImage.bass}</h4>
                                            <h4><strong>Guita e Backvocals -</strong> {frontImage.guita}</h4>
                                            <h4><strong>Drums -</strong> {frontImage.drums}</h4>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className=" justify-evenly items-center ring-1 ring-black-500  gap-5 py-5 px-5 rounded-sm mt-2 bg-white-500 ">
                                <div className="flex flex-row ss:flex-col justify-evenly gap-5 ss:ring-1 ss:ring-black-500 ss:items-center">
                                    <div className="ss:mt-4">
                                        <CustomIframe
                                            src={frontImage.frame1}
                                            title={frontImage.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={frontImage.title} />
                                    </div>
                                    <div className="ss:text-justify ss:flex ss:justify-center items-center">
                                        <ul>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic1}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic2}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic3}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic4}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic5}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic6}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic7}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic8}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic9}</li>
                                            <li><strong>{frontImage.name_band}</strong>{frontImage.nameMusic10}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <CustomIframe
                                            src={frontImage.frame2}
                                            title={frontImage.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={frontImage.title2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </>
    )
}