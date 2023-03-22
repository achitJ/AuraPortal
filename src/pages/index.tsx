import CanvasConstellation from "@/components/CanvasConstellation"
import Script from "next/script"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js" 
        // crossOrigin="anonymous" 
        // integrity="sha512-+ab24sSOgbciah+hyqPk/XqGOooAInsofud5JB4AdrRfahahDA/WWnnm6dS/bl7UmN8RW8ZGp85EoWU/aFTUhA=="
        strategy="beforeInteractive"
      />
      <Script src="/scripts/canvas.js"/>
      {/*TODO: Add Canvas*/}
      <CanvasConstellation/>
      <HeroSection/>
    </>
  )
}
