import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/Home/MainBanner";
import MainSoloBanner from "@/components/organisms/Home/MainSoloBanner";
import MainCard from "@/components/organisms/Home/MainCard";
import Head from "@/components/molecules/Head";
import MainSlide from "@/components/organisms/Home/MainSlide";

export default function Home() {
  return (
    <>
    <Layout>
      <Head />
      <main className="h-[100vh]">
        <section className="bg-gray-200">
          <MainSlide />
        </section>
        <MainBanner />
        <MainSoloBanner />
        <MainCard />
      </main>
    </Layout>
    </>
  )
}
