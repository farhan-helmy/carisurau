import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";
import type { FilePath, ImagePreviews } from "./AddSurauForm";
import { api } from "../utils/api";
import { UploadButton } from "../utils/uploadthing";
import "@uploadthing/react/styles.css";

export type ReviewSurauFormProps = {
  setOpen: (open: boolean) => void;
  surauName: string;
  surauId: string;
  refetch: () => void;
};

type UploadThingFilePath = {
  fileUrl: string;
  fileKey: string;
};

const ReviewSurauForm: FC<ReviewSurauFormProps> = ({
  setOpen,
  surauName,
  surauId,
  refetch,
}) => {
  const [rating, setRating] = useState(0);
  const [imagePreviews, setImagePreviews] = useState<ImagePreviews[]>();
  const [filePath, setFilePath] = useState<FilePath[]>([]);
  const [checkImageUpload, setCheckImageUpload] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [review, setReview] = useState("");
  const addRating = api.rate.addRating.useMutation();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-6 w-6 ${
            i <= rating ? "text-yellow-500" : "text-gray-400"
          } cursor-pointer`}
          onClick={() => handleRatingChange(i)}
        />
      );
    }

    return stars;
  };

  const handleUploadThing = (uploadThingUrl: UploadThingFilePath[]) => {
    const images: ImagePreviews[] = [];
    const urls: FilePath[] = [];

    uploadThingUrl.forEach((url) => {
      urls.push({ file_path: url.fileUrl });
      images.push({ id: url.fileKey, url: url.fileUrl });
    });

    setFilePath(urls);
    setImagePreviews(images);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (rating === 0) {
      setRatingError(true);
      return;
    }

    addRating
      .mutateAsync({
        rating: rating,
        image: filePath,
        review: review,
        surau_id: surauId,
      })
      .then(() => {
        setOpen(false);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Review
            </h3>
            <p className="mt-1 text-xs italic text-gray-600">
              Review this {surauName} surau inshaAllah
            </p>
          </div>
        </div>
        <div className="mt-4 md:col-span-2 md:mt-0">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="flex items-center justify-center pt-4">
              {renderStars()}
            </div>
            {ratingError ? (
              <p className="text-xs text-red-500 text-center">
                Please select a rating
              </p>
            ): null}
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Add your honest review about this surau and also any
                  improvement that can be made.
                </p>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="check-image-upload"
                    name="check-image-upload"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={(e) => {
                      setCheckImageUpload(e.target.checked);
                    }}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <p className="italic text-gray-500">
                    Any image to be uploaded?
                  </p>
                </div>
              </div>
              {!imagePreviews && checkImageUpload ? (
                <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  alert("Upload Completed");
                  if (res) {
                    void handleUploadThing(res);
                  }
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
              ) : null}
              <div className="flex flex-row gap-2">
                <div className="grid grid-cols-2 gap-2 space-y-2">
                  {imagePreviews
                    ? imagePreviews.map((imagePreview, index) => (
                        <div key={index}>
                          <Image
                            src={imagePreview.url}
                            alt="image preview"
                            sizes="100vw"
                            width={250}
                            height={250}
                          />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end gap-2 bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                className="justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => handleSubmit(e)}
              >
                Submit Review
              </button>
              <div
                className="mb-2 font-light underline hover:text-indigo-500 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSurauForm;
