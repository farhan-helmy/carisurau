import type { SurauPhoto } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";
import { capitalizeFirstLetter } from "../utils";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (surau?.images.length) {
      setImageHighlighted(surau.images[0]);
    }
  }, [surau]);

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
            <div className="max-h-72 overflow-hidden rounded-xl bg-gray-200 object-fill">
              <Image
                src={imageHighlighted?.file_path as string}
                alt=""
                className="h-full w-full rounded-lg object-fill object-center group-hover:opacity-75"
                width={200}
                height={200}
                priority
                placeholder="blur"
                blurDataURL="/assets/background/carisuraudefault.png"
              />
            </div>
            <div className="mt-2 flex items-center justify-center space-x-2 overflow-hidden">
              {surau?.images.map((image) => (
                <div
                  key={image.id}
                  className="max-h-24 overflow-hidden rounded-xl bg-gray-200 object-fill"
                >
                  <Image
                    key={image.id}
                    src={image.file_path}
                    alt={image.id}
                    className="h-full w-full rounded-lg object-fill object-center group-hover:opacity-75"
                    width={100}
                    height={100}
                    onClick={() => setImageHighlighted(image)}
                    placeholder="blur"
                    blurDataURL="/assets/background/carisuraudefault.png"
                    priority
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SurauOverview;
