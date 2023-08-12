import CanvasConstellation from "@/components/Sections/HeroSection/CanvasConstellation"
import Head from "next/head"
import HeroSection from "@/components/Sections/HeroSection"
import { getAllServices } from "@/backend-services/sanity/service"
import ServicesSection from "@/components/Sections/ServicesSection"
import ContactMeSection from "@/components/Sections/ContactMeSection"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { IService } from "@/types/sanity"

export const getStaticProps: GetStaticProps<{services: IService[]}> = async () => {
  const services = await getAllServices();

  return {
    props: {
      services,
    },
  }
}

export default function Home({ services } : InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <script src="/scripts/canvas.js" defer></script>
      </Head>
      <CanvasConstellation/>
      <HeroSection/>
      <ContactMeSection/>
      <ServicesSection services={services}/>
    </>
  )
}
