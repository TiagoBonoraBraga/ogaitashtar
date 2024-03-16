import { useState } from "react";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import Layout from "@/components/templates/Layout";
import MainSoloBanner from "@/components/organisms/Home/MainSoloBanner";
import MainCard from "@/components/organisms/Home/MainCard";
import Head from "@/components/molecules/Head";
import MainSlide from "@/components/organisms/Home/MainSlide";
import ImageGrid from "@/components/organisms/Gallery/ImageGrid";
import Whatsapp from "@/components/atoms/Whatsapp";



export default function Home() {

 

  return (
    <>
      <Layout>
        <Head />
        <main >
          <section className="dark:bg-medium">
            <MainSlide />
          </section>

          <ImageGrid />

          {/* <div className="flex flex-row">
          <button className="dark:text-white-500">Trocar tema</button>
          <CiSun size={30} className="cursor-pointer" />
          <IoMoonOutline size={30} className="cursor-pointer"/>
          </div> */}
         
          <MainSoloBanner />
          <MainCard />
          <Whatsapp />
        </main>
      </Layout>
    </>
  )
}
