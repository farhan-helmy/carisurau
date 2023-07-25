import type { SurauPhoto } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";
import { capitalizeFirstLetter } from "../utils";
import { useEffect, useState } from "react";
import ImageModal from "./shared/ImageModal";

type Surau = {
  id: string;
  name: string;
  images: SurauPhoto[];
};

type SurauOverviewProps = {
  surau?: Surau | null;
};

const SurauOverview: FC<SurauOverviewProps> = ({ surau }) => {
  const router = useRouter();
  const [imageHighlighted, setImageHighlighted] = useState<
    SurauPhoto | null | undefined
  >(null);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);

  useEffect(() => {
    if (surau?.images.length) {
      setImageHighlighted(surau.images[0]);
    }
  }, [surau]);

  const handleImageClick = (image: SurauPhoto) => {
    setImageHighlighted(image);
    setShowCarousel(true);
  };

  return (
    <>
      <div className="mb-4 flex flex-col">
        <button
          className="text-left text-indigo-500 underline"
          onClick={() => void router.push("/")}
        >
          Go back
        </button>
        <div className="mb-2 text-left text-2xl">
          {capitalizeFirstLetter(surau?.name as string)}
        </div>
        {surau?.images.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/background/carisuraudefault.png"
              alt="logoratemysurau"
              width={500}
              height={300}
              priority
            />
            <div className="italic text-gray-500">No image</div>
          </div>
        ) : (
          <>
            <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-200">
              {imageHighlighted?.file_path ? (
                <Image
                  src={imageHighlighted?.file_path}
                  alt=""
                  className="h-full w-full rounded-lg object-cover object-center group-hover:opacity-75"
                  width={200}
                  height={200}
                  priority
                  placeholder="blur"
                  blurDataURL="/assets/background/carisuraudefault.png"
                  onClick={() =>
                    handleImageClick(imageHighlighted)
                  }
                />
              ) : null}
            </div>

            {showCarousel && imageHighlighted && (
              <ImageModal
                url={imageHighlighted?.file_path}
                open={showCarousel}
                onClose={() => setShowCarousel(false)}
              />
            )}

            <div className="mt-2 flex w-full items-center justify-start gap-2 overflow-scroll">
              {surau?.images.map((image) => (
                <Image
                  src={image.file_path}
                  key={image.id}
                  alt={image.id}
                  className="h-24 min-w-[9rem] max-w-[9rem] rounded-md object-cover hover:cursor-pointer group-hover:opacity-75"
                  onClick={() => setImageHighlighted(image)}
                  width={400}
                  height={400}
                  placeholder="blur"
                  blurDataURL="/assets/background/carisuraudefault.png"
                  priority
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SurauOverview;
