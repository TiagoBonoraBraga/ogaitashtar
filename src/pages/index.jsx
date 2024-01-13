import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/MainBanner";
import SoloBanner from "@/components/organisms/soloBanner";
import MainCard from "@/components/organisms/MainCard";
import Head from "@/components/molecules/Head";
import MainSlide from "@/components/organisms/MainSlide";

export default function Home() {
  return (
    <>
    <Layout>
      <Head />
      <section className="bg-gray-200">
        <MainSlide />
      </section>
      <MainBanner />
      <SoloBanner />
      <MainCard />
    </Layout>
    </>
  )
}
