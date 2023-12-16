import Header from "@/components/organisms/Header";

export default function Layout({children}){
    return (
        <>
            <Header />
            {children}
        </>
    )
}