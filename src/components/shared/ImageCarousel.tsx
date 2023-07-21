import { SurauPhoto } from "@prisma/client";
import Image from "next/image";
import React from "react";

type ImageCarouselProps = {
  url: string;
};

const ImageCarousel = ({ url }: ImageCarouselProps) => {
  return (
    <div className="inset-0 z-0 flex items-center justify-center overflow-y-auto">
      <Image
        alt="logoratemysurau"
        width={500}
        height={300}
        priority
        src={url}
      />
    </div>
  );
};

export default ImageCarousel;
