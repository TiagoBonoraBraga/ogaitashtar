import Image from "next/image";
import Link from "next/link";
import { semFututoDatas } from "@/mocks/Productions";
import CustomH3 from "../../atoms/CustomH3";
import CustomIframe from "../../atoms/CustomIframe";
import CustomImage from "../../atoms/CustomImage";
import CustomP from "../../atoms/CustomP"; 

export default function SemFuturoDiscografy() {
    return (
        <>
         <section className="ss:w-auto mt-5">
               
                {semFututoDatas.map((semFuturoData, index) => (
                    <section key={index} className="ring-1 ring-black-500 max-w-[1400px] h-auto w-full m-auto p-4 rounded-sm mb-10 bg-black-500/30">
                        <div className="relative group">
                            {/* <div className="flex flex-row justify-start items-center ring-1 ring-black-500 mb-2 rounded-sm bg-white-500 cursor-pointer ">
                                <CustomImage
                                    src={semFuturoData.logo}
                                    alt={semFuturoData.alt1}
                                    width={300}
                                    height={200}
                                />
                            </div> */}
                            <div className="  flex flex-row ring-1 ring-black-500 gap-5 py-5 px-5 rounded-sm bg-white-500">
                                <div className="flex flex-row ss:flex-col gap-5 ss:gap-0 ">
                                    <div>
                                        <CustomImage
                                            src={semFuturoData.image1}
                                            alt={semFuturoData.alt1}
                                            width={350}
                                            height={300}

                                        />
                                    </div>
                                    <div className="flex flex-col ring-1 ring-black-500 w-full mr-5 p-3 rounded-sm">
                                        <div className="flex flex-row justify-start ">
                                            <div className="flex flex-row ss:flex-col justify-start gap-5 ">
                                                <h2 className=" rounded-sm px-1 py-1 w-60 font-bold ">{semFuturoData.name_album}</h2>
                                                <span className=" rounded-sm px-1 py-1"><strong>Ano de Lançamento -</strong> {semFuturoData.year}</span>
                                            </div>
                                        </div>
                                        <div className="rounded-sm mt-4">
                                            <CustomP description={semFuturoData.description} />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 font-bold">Ficha Técnica</h3>
                                            <h4><strong>Bass e Vocals -</strong> {semFuturoData.bass}</h4>
                                            <h4><strong>Guita e Backvocals -</strong> {semFuturoData.guita}</h4>
                                            <h4><strong>Drums -</strong> {semFuturoData.drums}</h4>
                                        </div>
                                        <div className="flex flex-row gap-3 mt-5 ss:flex ss:justify-center ss:items-center">
                                            <div className="cursor-pointer">
                                                <Link href={semFuturoData.linkFace} className="target-blank">
                                                    <Image
                                                        src={semFuturoData.urlMediaFace}
                                                        alt="logo Facebook"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={semFuturoData.linkInstagram} className="target-blank" >
                                                    <Image
                                                        src={semFuturoData.urlMediaInstagram}
                                                        alt="logo Instagram"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={semFuturoData.linkYoutube} className="target-blank">
                                                    <Image
                                                        src={semFuturoData.urlMediaYoutube}
                                                        alt="logo Youtube"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="cursor-pointer">
                                                <Link href={semFuturoData.linkSpotify} className="target-blank">
                                                    <Image
                                                        src={semFuturoData.urlMediaSpotify}
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
                                            src={semFuturoData.frame1}
                                            title={semFuturoData.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={semFuturoData.title} />
                                    </div>
                                    <div className="ss:text-justify ss:flex ss:justify-center items-center">
                                        <ul>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic1}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic2}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic3}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic4}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic5}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic6}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic7}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic8}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic9}</li>
                                            <li><strong>{semFuturoData.name_band}</strong>{semFuturoData.nameMusic10}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <CustomIframe
                                            src={semFuturoData.frame2}
                                            title={semFuturoData.title}
                                            width="300"
                                            height="200"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        />
                                        <CustomH3 name={semFuturoData.title2} />
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