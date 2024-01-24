import Layout from "@/components/templates/Layout";
import MainBanner from "@/components/organisms/Home/MainBanner";
import MainSoloBanner from "@/components/organisms/Home/MainSoloBanner";
import MainCard from "@/components/organisms/Home/MainCard";
import Head from "@/components/molecules/Head";
import MainSlide from "@/components/organisms/Home/MainSlide";

import { useState } from "react";
import Modal from "@/components/molecules/Modal";

export default function Home() {

  const [openModal, setOpenModal] = useState(false);


  const handleClick = () => {
    setOpenModal(true)
  }



  return (
    <>
      <Layout>
        <Head />
        <main >
          <section className="bg-gray-200">
            <MainSlide />
          </section>
          {/* {openModal && (            
              <Modal />
          )}
          <div>
            <button onClick={handleClick}>Click</button>
          </div>  */}


          <MainBanner />
          <MainSoloBanner />
          <MainCard />
        </main>
      </Layout>
    </>
  )
}
