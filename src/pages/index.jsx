import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/MainBanner";
import SoloBanner from "@/components/organisms/soloBanner";
import MainCard from "@/components/organisms/MainCard";
import Head from "@/components/molecules/Head";

export default function Home() {
  return (
    <>
    <Layout>
      <Head />
      <MainBanner />
      <SoloBanner />
      <MainCard />
    </Layout>
    </>
  )
}
