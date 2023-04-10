import type { SurauPhoto } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/router"
import type { FC } from "react"
import { capitalizeFirstLetter } from "../utils"
import { useEffect, useState } from "react"

type Surau = {
  id: string
  name: string
  images: SurauPhoto[]
}

type SurauOverviewProps = {
  surau?: Surau | null
}

const SurauOverview: FC<SurauOverviewProps> = ({ surau }) => {
  const router = useRouter()
  const [imageHighlighted, setImageHighlighted] = useState<SurauPhoto | null | undefined>(null)

  useEffect(() => {
    if (surau?.images.length) {
      setImageHighlighted(surau.images[0])
    }
  }, [surau])

  return (
    <>
      <div className="flex flex-col mb-4">
        <button className="text-left underline text-indigo-500" onClick={() => void router.push("/")}>Go back</button>
        <div className="text-left text-2xl mb-2">
          {capitalizeFirstLetter(surau?.name as string)}
        </div>
        {surau?.images.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/logo/rms_logo_new_1.png"
              alt="logoratemysurau"
              width={500}
              height={300}
            />
            <div className="italic text-gray-500">
              No image
            </div>
          </div>
        ) : (
          <>
            <Image
              className="rounded-lg"
              src={imageHighlighted?.file_path as string}
              alt=""
              width={500}
              height={300}
            />
            <div className="space-x-2 flex items-center justify-center overflow-auto mt-2">
              {surau?.images.map((image) => (
                <Image
                  key={image.id}
                  className="rounded-lg"
                  src={image.file_path}
                  alt="te"
                  width={100}
                  height={50}
                  onClick={() => setImageHighlighted(image)}
                  placeholder="blur"
                  blurDataURL="/assets/logo/rms_logo_new_1.png"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default SurauOverview
