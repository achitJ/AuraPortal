import CanvasConstellation from "@/components/CanvasConstellation"
import Script from "next/script"
import Head from "next/head"
import HeroSection from "@/components/Sections/HeroSection"
import { getAllServices } from "@/backend-services/sanity/service"
import { IHomeProps } from "@/types/props"
import ServicesSection from "@/components/Sections/ServicesSection"
import ContactMeSection from "@/components/Sections/ContactMeSection"

export async function getStaticProps() {
  const services = await getAllServices()

  return {
    props: {
      services,
    },
  }
}

export default function Home({ services } : IHomeProps) {

  return (
    <>
      <Head>
        <script src="/scripts/canvas.js" defer></script>
      </Head>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js" 
        strategy="beforeInteractive"
      />
      {/* <Script src="/scripts/canvas.js"/> */}
      <CanvasConstellation/>
      <HeroSection/>
      <ContactMeSection/>
      <ServicesSection services={services}/>
    </>
  )
}
