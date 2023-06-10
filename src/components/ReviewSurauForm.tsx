import { PhotoIcon, PlusCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";
import { resizeImage } from "../utils/image";
import type { FilePath } from "./AddSurauForm";
import { useS3Upload } from "next-s3-upload";
import { api } from "../utils/api";

export type ReviewSurauFormProps = {
  setOpen: (open: boolean) => void;
  surauName: string;
  surauId: string;
  refetch: () => void;
};

type ImagePreviews = {
  url: string;
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
  const { uploadToS3 } = useS3Upload();
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

  const handleAddMoreImages = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files === null) return;
    const file = e.target?.files[0];
    const { url } = await uploadToS3(file as File);

    setImagePreviews([
      ...(imagePreviews as ImagePreviews[]),
      URL.createObjectURL(file as Blob) as unknown as ImagePreviews,
    ]);
    setFilePath([...filePath, url as unknown as FilePath]);
  };

  const onSurauImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const images: ImagePreviews[] = [];
    const urls: FilePath[] = [];

    if (e.target.files === null) return;

    for (const element of e.target.files) {
      const resizedImage = await resizeImage(element, 100);
      images.push(
        URL.createObjectURL(resizedImage) as unknown as ImagePreviews
      );

      const { url } = await uploadToS3(element);
      const cloudFrontFilePath = url.replace(
        "https://ratemysurau.s3.ap-southeast-1.amazonaws.com/",
        "https://dcm2976bhgfsz.cloudfront.net/"
      );

      urls.push({ file_path: cloudFrontFilePath });
    }
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
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="product-image-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <div className="group relative m-4">
                      <PhotoIcon className="h-12 w-12" />
                      <span className="text-md absolute top-10 scale-0 rounded bg-gray-800 p-2 text-white transition-all group-hover:scale-100">
                        ✨ click to add photo!
                      </span>
                    </div>
                    <input
                      type="file"
                      name="product-image-upload"
                      id="product-image-upload"
                      className="sr-only"
                      onChange={(e) => void onSurauImageChange(e)}
                      multiple
                      accept="image/*"
                    />
                  </label>
                </div>
              ) : null}
              <div className="flex flex-row gap-2">
                <div className="grid grid-cols-2 gap-2 space-y-2">
                  {imagePreviews
                    ? imagePreviews.map((imagePreview, index) => (
                        <div key={index}>
                          <h1>{imagePreview.url}</h1>
                          <Image
                            src={imagePreview as unknown as string}
                            alt="xsd"
                            sizes="100vw"
                            width={250}
                            height={250}
                          />
                        </div>
                      ))
                    : null}
                  {imagePreviews ? (
                    <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-b">
                      <label
                        htmlFor="add-more-product-image-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>
                          <PlusCircleIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                        <input
                          type="file"
                          name="add-more-product-image-upload"
                          id="add-more-product-image-upload"
                          className="sr-only"
                          onChange={(e) => void handleAddMoreImages(e)}
                          multiple
                          accept="image/*"
                        />
                      </label>
                    </div>
                  ) : null}
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
                className="mb-2 font-light underline"
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
