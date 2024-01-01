import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/MainBanner";
import SoloBanner from "@/components/organisms/soloBanner";
import CardMain from "@/components/organisms/CardMain";

export default function Home() {
  return (
    <>
    <Layout>
      <MainBanner />
      <SoloBanner />
      <CardMain />
    </Layout>
    </>
  )
}
