import Header from "@/components/organisms/Layout/Header";
import Footer from "../organisms/Layout/Footer";

export default function Layout({children}){
    return (
        <>
      
            <Header />
            {children}
            <Footer />
      
        </>
    )
}