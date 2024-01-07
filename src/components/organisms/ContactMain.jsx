import ContactForm from "../molecules/ContactForm";
import ContainerInfoContact from "../molecules/ContainerInfoContact";

export default function ContactMain() {
    return (
        <>
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <div
                        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
                    </div>
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] black:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                                <ContainerInfoContact />                           
                            <div className="mx-auto max-w-[700px]">
                                <ContactForm />                               
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}