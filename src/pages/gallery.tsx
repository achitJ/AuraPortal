import { getAllImages } from "@/backend-services/sanity/gallery";
import { IImage } from "@/types/sanity";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ImageGallery from "@/components/Sections/GallerySection";

export const getServerSideProps: GetServerSideProps<{images: IImage[]}> = async () => {
  const images = await getAllImages();

  return {
    props: {
      images,
    },
  }
}

export default function Gallery({ images } : InferGetServerSidePropsType<typeof getServerSideProps>) {  
  return (
    <ImageGallery images={images}/>
  )
}