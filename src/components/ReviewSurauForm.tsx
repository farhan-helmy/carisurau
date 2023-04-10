import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react"


export type ReviewSurauFormProps = {
  setOpen: (open: boolean) => void
  surauName: string
}

type ImagePreviews = {
  url: string,
}
const ReviewSurauForm: FC<ReviewSurauFormProps> = ({ setOpen, surauName }) => {

  const [rating, setRating] = useState(0);
  const [imagePreviews, setImagePreviews] = useState<ImagePreviews[]>();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-6 h-6 ${i <= rating ? "text-yellow-500" : "text-gray-400"
            } cursor-pointer`}
          onClick={() => handleRatingChange(i)}
        />
      );
    }

    return stars;
  };

  const selectImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images: ImagePreviews[] = [];

    if (e.target.files === null) return;

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i] as Blob) as unknown as ImagePreviews);
    }

    setImagePreviews(images);
  }

  return (
    <div className="">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Review</h3>
            <p className="mt-1 text-gray-600 text-xs italic">
              Review this {surauName} surau inshaAllah
            </p>
          </div>
        </div>
        <div className="mt-4 md:col-span-2 md:mt-0">

          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="flex items-center justify-center pt-4">
              {renderStars()}
            </div>
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Add your honest review about this surau and also any improvement that can be made.
                </p>
              </div>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input onChange={selectImages} name="file-upload" type="file" className="sr-only" multiple accept="image/*" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
              {imagePreviews ?(
                imagePreviews.map((imagePreview, index) => (
                <div key={index} className="">
                  <Image src={imagePreview as unknown as string} alt="xsd" height={250} width={250} />
                </div>
                )
              )) : null}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex flex-row items-end justify-end gap-2">
              <button
                className=" justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit Review
              </button>
              <div className="mb-2 font-light underline" onClick={() => setOpen(false)}>Close</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default ReviewSurauForm