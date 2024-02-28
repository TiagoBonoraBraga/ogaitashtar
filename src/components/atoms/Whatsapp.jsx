import Link from "next/link";
import Image from "next/image";
import whatsappLogo from "/public/images/whatsapp.png";

export default function Whatsapp() {
    return (
        <>
            <Link
                href="https://api.whatsapp.com/send?phone=5541988082384"
                target="_blank"
            >
                <div className="fixed bottom-0 right-0 z-9999 mr-5 mb-2 ">
                    <Image src={whatsappLogo} width={60} height={60} alt="whatsapp" />
                </div>
            </Link>
        </>
    )
}