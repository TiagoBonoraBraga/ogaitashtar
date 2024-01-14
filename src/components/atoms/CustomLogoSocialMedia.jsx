import Link from "next/link";
import Image from "next/image";
import { frontImages } from "@/mocks/Productions";

export default function CustoLogoSocialMedia() {
    return (
        <>
            {frontImages.map((frontImage, index) => (
                <div key={index}>
                    <div className="cursor-pointer">
                        <Link href={frontImage.linkFace} className="target-blank">
                            <Image
                                src={frontImage.urlMediaFace}
                                alt="logo Facebook"
                                width={30}
                                height={30}
                            />
                        </Link>

                    </div>
                    <div className="cursor-pointer">
                        <Link href={frontImage.linkInstagram} className="target-blank" >
                            <Image
                                src={frontImage.urlMediaInstagram}
                                alt="logo Instagram"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className="cursor-pointer">
                        <Link href={frontImage.linkYoutube} className="target-blank">
                            <Image
                                src={frontImage.urlMediaYoutube}
                                alt="logo Youtube"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className="cursor-pointer">
                        <Link href={frontImage.linkSpotify} className="target-blank">
                            <Image
                                src={frontImage.urlMediaSpotify}
                                alt="logo Spotify"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}