import Layout from "@/components/templates/Layout";
import MainSoloBanner from "@/components/organisms/Home/MainSoloBanner";
import MainCard from "@/components/organisms/Home/MainCard";
import Head from "@/components/molecules/Head";
import MainSlide from "@/components/organisms/Home/MainSlide";
import ImageGrid from "@/components/organisms/Gallery/ImageGrid";



export default function Home() {
  return (
    <>
      <Layout>
        <Head />
        <main >
          <section className="bg-gray-200 mb-10">
            <MainSlide />
          </section>
          <ImageGrid />         
          <MainSoloBanner />
          <MainCard />         
        </main>
      </Layout>
    </>
  )
}
