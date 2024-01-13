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
      <MainSlide />
      <MainBanner />
      <SoloBanner />
      <MainCard />
    </Layout>
    </>
  )
}
