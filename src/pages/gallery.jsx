import Layout from "@/components/templates/Layout";
import Head from "@/components/molecules/Head"
import ImageGallery from "@/components/organisms/Gallery/ImageGallery";

export default function Gallery({id}) {
    return (
        <>
        <Layout>
            <Head />
            <main className="mt-[60px]">
                <ImageGallery />
            </main>
        </Layout>
        </>
    )
}