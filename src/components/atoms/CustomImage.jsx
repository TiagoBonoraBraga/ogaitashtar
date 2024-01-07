import Image from "next/image";

export default function CustomImage({src, alt, width, height}) {
    return (
        <>
        <Image 
            className="rounded-t-lg"
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
        </>
    )
}