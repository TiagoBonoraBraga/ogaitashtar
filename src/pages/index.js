import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/MainBanner";
import SoloBanner from "@/components/organisms/soloBanner";
import CardMain from "@/components/organisms/CardMain";
import Head from "@/components/molecules/Head";

export default function Home() {
  return (
    <>
    <Layout>
      <Head />
      <MainBanner />
      <SoloBanner />
      <CardMain />
    </Layout>
    </>
  )
}
