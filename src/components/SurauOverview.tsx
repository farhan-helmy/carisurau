import type { SurauPhoto } from "@prisma/client";
import Image from "next/image";
import type { FC } from "react";
import { capitalizeFirstLetter } from "../utils";
import { useEffect, useState } from "react";
import ImageModal from "./shared/ImageModal";
import Modal from "./shared/Modal";
import Link from "next/link";
import CustomUpload from "./shared/CustomUpload";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Surau = {
  id: string;
  name: string;
  images: SurauPhoto[];
};

type SurauOverviewProps = {
  surau?: Surau | null;
};

type FileUrl = {
  fileUrls: string[];
};

const SurauOverview: FC<SurauOverviewProps> = ({ surau }) => {
  const [imageHighlighted, setImageHighlighted] = useState<
    SurauPhoto | null | undefined
  >(null);
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [openAddMorePhotos, setOpenAddMorePhotos] = useState<boolean>(false);

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
        <AddMorePhotos
          openAddMorePhotos={openAddMorePhotos}
          setOpenAddMorePhotos={setOpenAddMorePhotos}
        />
        <Link
          className="flex items-center gap-2 pb-2 text-left text-indigo-500 hover:underline"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Go back
        </Link>
        <div className="mb-2 flex justify-between text-left text-xl">
          <div className="truncate text-ellipsis">
            {capitalizeFirstLetter(surau?.name as string)}
          </div>
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
            <div className="italic text-muted-foreground">No image</div>
            <button
              className="mt-2 rounded-md bg-indigo-500 px-2 py-1 text-xs text-white hover:bg-indigo-600"
              onClick={() => setOpenAddMorePhotos(true)}
            >
              Add image
            </button>
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
                  onClick={() => handleImageClick(imageHighlighted)}
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

            <div className="mt-2 flex w-full items-center justify-start gap-2 overflow-x-auto">
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
            <div>
              <button
                className="mt-2 rounded-md bg-indigo-500 px-2 py-1 text-xs text-white hover:bg-indigo-600"
                onClick={() => setOpenAddMorePhotos(true)}
              >
                Add more photos
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

type AddMorePhotosProps = {
  openAddMorePhotos: boolean;
  setOpenAddMorePhotos: (open: boolean) => void;
};

export type FilePath = {
  file_path: string;
  is_thumbnail: boolean;
};

const AddMorePhotos = ({
  openAddMorePhotos,
  setOpenAddMorePhotos,
}: AddMorePhotosProps) => {
  const [imageList, setImageList] = useState<FileUrl>();
  const [filePath, setFilePath] = useState<FilePath[]>([]);
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);

  const router = useRouter();
  const uniqueName = router.query["id"];

  const addPhotos = api.surau.addPhotos.useMutation();
  const { refetch } = api.surau.getSurau.useQuery({
    unique_name: uniqueName ? (uniqueName as string) : "",
  });

  useEffect(() => {
    setFilePath((prev) => {
      const updatedFilePath = [...prev];
      imageList?.fileUrls.forEach((image) => {
        updatedFilePath.push({
          file_path: image,
          is_thumbnail: false,
        });
      });

      return updatedFilePath;
    });
  }, [imageList]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!filePath) return;

    if (!uploadCompleted) {
      toast.warning("Please press upload files first!");
      return;
    }

    addPhotos
      .mutateAsync({
        unique_name: uniqueName as string,
        image: filePath,
      })
      .then(() => {
        toast.success("Photos added successfully");
        void refetch();
        setUploadCompleted(false);
        setOpenAddMorePhotos(false);
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      });
  };

  return (
    <Modal open={openAddMorePhotos} setOpen={setOpenAddMorePhotos}>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-primary-foreground">
              Upload more photos
            </h3>
            <p className="mt-1 text-xs italic text-muted-foreground">
              Help to give a better view of this surau, upload more photos
            </p>
          </div>
        </div>
        <div className="mt-4 md:col-span-2 md:mt-0">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            {uploadCompleted ? (
              <div className="flex flex-col items-center justify-center">
                <div className="text-center font-bold">Upload completed!</div>
                <CheckCircleIcon className="h-6 w-6 text-center text-green-500" />
                <div className="text-xs font-light italic">
                  Please press submit button
                </div>
              </div>
            ) : (
              <CustomUpload
                uploadedFileList={setImageList}
                setUploadCompleted={setUploadCompleted}
              />
            )}

            <div className="mt-4 flex flex-row items-end justify-end gap-2 bg-gray-50 px-4 py-3 text-right dark:bg-gray-800 sm:px-6">
              <button
                className="justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
              <div
                className="mb-2 cursor-pointer font-light underline hover:text-indigo-500"
                onClick={() => setOpenAddMorePhotos(false)}
              >
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SurauOverview;
