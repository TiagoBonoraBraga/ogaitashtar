import MainBanner from "@/components/organisms/MainBanner";
import SoloBanner from "@/components/organisms/soloBanner";
import Layout from "@/components/templates/Layout";

export default function Home() {
  return (
    <>
    <Layout>
      <MainBanner />
      <SoloBanner />
    </Layout>
    </>
  )
}
