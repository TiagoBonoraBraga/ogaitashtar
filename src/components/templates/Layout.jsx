import Header from "@/components/organisms/Header";
import Footer from "../organisms/Footer";

export default function Layout({children}){
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}