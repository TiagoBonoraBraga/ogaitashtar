import Image from "next/image";
import Link from "next/link";
import { feridaDatas } from "@/mocks/Productions";
import CustomH3 from "../../atoms/CustomH3";
import CustomIframe from "../../atoms/CustomIframe";
import CustomImage from "../../atoms/CustomImage";
import CustomP from "../../atoms/CustomP"; 

export default function FeridaDiscografy() {
    return (
        <>
         <section className="ss:w-auto">
               
                {feridaDatas.map((feridaData, index) => (
                    <section key={index} className="ring-1 ring-black-500 max-w-[1400px] h-auto w-full m-auto p-4 rounded-sm mb-10 bg-black-500/30">
                        <div className="relative group">
                            {/* <div className="flex flex-row justify-start items-center ring-1 ring-black-500 mb-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src={feridaData.logo}
                                    alt={feridaData.alt1}
                                    width={300}
                                    height={200}
                                />
                            </div> */}
                            <div className="  flex flex-row ring-1 ring-black-500 gap-5 py-5 px-5 rounded-sm bg-white-500">
                                <div className="flex flex-row ss:flex-col gap-5 ss:gap-0 ">
                                    <div>
                                        <CustomImage
                                            src={feridaData.image1}
                                            alt={feridaData.alt1}
                                            width={350}
                                            height={300}

                                        />
                                    </div>
                                    <div className="flex flex-col ring-1 ring-black-500 w-full mr-5 p-3 rounded-sm">
                                        <div className="flex flex-row justify-start ">
                                            <div className="flex flex-row ss:flex-col justify-start gap-5 ">
                                                <h2 className=" rounded-sm px-1 py-1 w-60 font-bold ">{feridaData.name_album}</h2>
                                                <span className=" rounded-sm px-1 py-1"><strong>Ano de Lançamento -</strong> {feridaData.year}</span>
                                            </div>
                                        </div>
                                        <div className="rounded-sm mt-4">
                                            <CustomP description={feridaData.description} />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 font-bold">Ficha Técnica</h3>
                                            <h4><strong>Bass e Vocals -</strong> {feridaData.bass}</h4>
                                            <h4><strong>Guita e Backvocals -</strong> {feridaData.guita}</h4>
                                            <h4><strong>Drums -</strong> {feridaData.drums}</h4>
                                        </div>
                                        <div className="flex flex-row gap-3 mt-5 ss:flex ss:justify-center ss:items-center">
                                            <div className="cursor-pointer">
                                                <Link href={feridaData.linkFace} className="target-blank">
                                                    <Image
                                                        src={feridaData.urlMediaFace}
                                                        alt="logo Facebook"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={feridaData.linkInstagram} className="target-blank" >
                                                    <Image
                                                        src={feridaData.urlMediaInstagram}
                                                        alt="logo Instagram"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={feridaData.linkYoutube} className="target-blank">
                                                    <Image
                                                        src={feridaData.urlMediaYoutube}
                                                        alt="logo Youtube"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={feridaData.linkSpotify} className="target-blank">
                                                    <Image
                                                        src={feridaData.urlMediaSpotify}
                                                        alt="logo Spotify"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" justify-evenly items-center ring-1 ring-black-500  gap-5 py-5 px-5 rounded-sm mt-2 bg-white-500 ">
                                <div className="flex flex-row ss:flex-col justify-evenly gap-5 ss:ring-1 ss:ring-black-500 ss:items-center">
                                    <div className="ss:mt-4">
                                        <CustomIframe
                                            src={feridaData.frame1}
                                            title={feridaData.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={feridaData.title} />
                                    </div>
                                    <div className="ss:text-justify ss:flex ss:justify-center items-center">
                                        <ul>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic1}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic2}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic3}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic4}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic5}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic6}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic7}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic8}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic9}</li>
                                            <li><strong>{feridaData.name_band}</strong>{feridaData.nameMusic10}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <CustomIframe
                                            src={feridaData.frame2}
                                            title={feridaData.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={feridaData.title2} />
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