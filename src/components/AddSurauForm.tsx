/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PhotoIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic'
import type { FC } from 'react';
import React, { useState } from 'react'
import { useS3Upload } from 'next-s3-upload';
import Image from 'next/image'
import { api } from '../utils/api';
import { resizeImage } from '../utils/image';
import AlertModal from './shared/AlertModal';
const Select = dynamic(() => import("react-select"), {
  ssr: true,
})
const AsyncCreatableSelect = dynamic(() => import("react-select/async-creatable"), {
  ssr: true,
})

export type AddSurauFormProps = {
  setOpen: (open: boolean) => void
}

type FilePath = {
  file_path: string
}

export type ImagePreviews = {
  id: string,
  url: string
}

type MallOptions = {
  value: string,
  label: string,
  id: string
}

const AddSurauForm: FC<AddSurauFormProps> = ({ setOpen }) => {

  const generateCombination = (): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let combination = '';

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      const letter = alphabet[randomIndex];
      combination += letter;
    }

    return combination;
  };

  const [findMallChecked, setFindMallChecked] = useState(false);
  const [findMallForm, setFindMallForm] = useState(false);
  const [choosenState, setChoosenState] = useState("");
  const [choosenDistrict, setChoosenDistrict] = useState("");
  const [imagePreviews, setImagePreviews] = useState<ImagePreviews[]>();
  const [loading, setLoading] = useState(false);
  const [findMallLoading, setFindMallLoading] = useState(false);
  const [generatedSurauName, setGeneratedSurauName] = useState("");
  const [mallData, setMallData] = useState("");
  const [filePath, setFilePath] = useState<FilePath[]>([]);
  const [surauName, setSurauName] = useState("");
  const [briefDirection, setBriefDirection] = useState("");
  const [surauNameError, setSurauNameError] = useState("");
  const [briefDirectionError, setBriefDirectionError] = useState("");
  const [alertModalOpen, setAlertModalOpen] = useState(false)

  const { uploadToS3 } = useS3Upload();

  const state = api.surau.getState.useQuery()
  const district = api.surau.getDistrictOnState.useQuery({ id: choosenState })
  const mall = api.surau.getMallOnDistrict.useQuery({ district_id: choosenDistrict, state_id: choosenState })
  const addSurau = api.surau.addSurau.useMutation()

  const handleNegeriChange = (e: any) => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    setChoosenState(e.id)
    
  }

  const handleDaerahChange = (e: any) => {
    setFindMallLoading(true)
    setTimeout(() => {
      setFindMallLoading(false)
      setFindMallForm(true)
    }, 1000)

    setChoosenDistrict(e.id)
  }

  const transformSurauName = (name: string) => {
    setSurauName(name);
    const transformedSurauName = name.toLowerCase().replace(/ /g, "-");

    const randomString = generateCombination();
    const surauNameWithRandomString = `${transformedSurauName}-${randomString}`;

    setGeneratedSurauName(surauNameWithRandomString);
  }

  const handleAddMoreImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target?.files[0];
    const { url } = await uploadToS3(file as File);

    setImagePreviews([...imagePreviews as ImagePreviews[], URL.createObjectURL(file as Blob) as unknown as ImagePreviews]);
    setFilePath([...filePath, url as unknown as FilePath]);
  }

  const handleMallChange = (e: any) => {
    setMallData(e.id)
  }

  const onProductImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const images: ImagePreviews[] = [];
    const urls: FilePath[] = [];

    if (e.target.files === null) return;

    for (const element of e.target.files) {
      const resizedImage = await resizeImage(element, 100);
      images.push(URL.createObjectURL(resizedImage) as unknown as ImagePreviews);
      // download the image 
      // const downloadUrl = URL.createObjectURL(resizedImage);
      // alert(downloadUrl);
      // console.log(element)
      const { url } = await uploadToS3(element);
      urls.push({ file_path: url});
    }
    // console.log(urls);
    setFilePath(urls);
    setImagePreviews(images);
    // const { url } = await uploadToS3(file);
    // setValue('image', urls.map(url => ({ src: url })));
  }

  const filterMall = (inputValue: string) => {
    if (!mall.data) return [];
    return mall.data?.filter((i) =>
      i.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<MallOptions[]>((resolve) => {
      setTimeout(() => {
        resolve(filterMall(inputValue));
      }, 1000);
    });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (surauName === "") {
        setSurauNameError("Surau name is required")
      }
      if (briefDirection === "") {
        setBriefDirectionError("Brief direction is required")
      }
      addSurau.mutateAsync({
        name: surauName,
        brief_direction: briefDirection,
        unique_name: generatedSurauName,
        state_id: choosenState,
        district_id: choosenDistrict,
        mall_id: mallData,
        image: filePath
      })
      .then(() => {
        setAlertModalOpen(true)
        setTimeout(() => {
          setAlertModalOpen(false)
          setOpen(false)
        }, 3000)
      })
      .catch(e => {
        console.log(e)
      })
    }

  return (
    <>
    <AlertModal open={alertModalOpen} setOpen={setAlertModalOpen} message='Surau submitted, please wait for admin approval' />
      <div className="overflow-auto">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add surau</h3>
              <p className="mt-1 text-gray-600 text-xs italic">
                Help us to add surau if it is not in the list.
              </p>
            </div>
          </div>
          <div className="mt-4 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="surau-name" className="block text-sm font-medium text-gray-700">
                        Surau Name
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="surau-name"
                          id="surau-name"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder=""
                          onChange={(e) => { transformSurauName(e.target.value) }}
                          
                        />
                        {surauNameError ? <p className="text-red-500 text-xs italic">{surauNameError}</p> : null}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 sm:col-span-2">
                      <label htmlFor="surau-name" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <div className="mt-1 block rounded-md shadow-sm w-full relative z-20">
                        <Select
                          options={state.data}
                          getOptionLabel={(option: any) => option.name}
                          getOptionValue={(option: any) => option.id}
                          onChange={(e) => handleNegeriChange(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <div className="relative">
                        <div className=" w-4 h-4 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>
                        <div className="w-4 h-4 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent"></div>
                      </div>
                    </div>
                  ) : null}

                  {!loading && district.data?.length !== 0 ? (
                    <div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 sm:col-span-2">
                          <label htmlFor="surau-name" className="block text-sm font-medium text-gray-700">
                            District
                          </label>
                          <div className="mt-1 block rounded-md shadow-sm w-full relative z-10">
                            <Select
                              options={district.data}
                              getOptionLabel={(option: any) => option.name}
                              getOptionValue={(option: any) => option.id}
                              onChange={(e) => handleDaerahChange(e)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {findMallLoading ? (
                        <div className="flex justify-center items-center mt-4">
                          <div className="relative">
                            <div className=" w-4 h-4 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>
                            <div className="w-4 h-4 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent"></div>
                          </div>
                        </div>
                      ) : null}
                      {!findMallLoading && findMallForm ? (<div className="max-w-lg space-y-4 mt-4">
                        <div className="relative flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="check-surau-mall"
                              name="check-surau-mall"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={(e) => { setFindMallChecked(e.target.checked) }}
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <p className="text-gray-500 italic">Check if your surau is inside a mall.</p>
                          </div>
                        </div>
                      </div>) : null}

                    </div>
                  ) : null}
                  {findMallChecked ? (
                    <div>
                      <AsyncCreatableSelect
                        isClearable
                        onChange={(e) => handleMallChange(e)}
                        loadOptions={promiseOptions}
                        cacheOptions
                        defaultOptions
                      />
                    </div>
                  ) : null
                  }

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Direction / guide
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={''}
                        onChange={(e) => { setBriefDirection(e.target.value) }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500 italic">
                      Brief direction or guide to the surau. eg. near to the mosque, near to the shop lot, etc.
                    </p>
                    {briefDirectionError ? <p className="text-red-500 text-xs italic">{briefDirectionError}</p> : null}
                  </div>

                  {!imagePreviews ? (<div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="product-image-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <div className="group relative m-4">
                        <PhotoIcon className="h-12 w-12" />
                        <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-md text-white group-hover:scale-100">✨ click to add photo!</span>
                      </div>
                      <input type="file" name="product-image-upload" id="product-image-upload" className="sr-only" onChange={(e) => void onProductImageChange(e)} multiple accept="image/*" />
                    </label>
                  </div>)
                    : null}

                  <div className="">
                    <div className="grid-cols-2 space-y-2 grid gap-2">
                      {imagePreviews ? (
                        imagePreviews.map((imagePreview, index) => (
                          <div key={index}>
                            <h1>{imagePreview.url}</h1>
                            <Image src={imagePreview as unknown as string} alt="xsd" sizes='100vw' width={250} height={250} />
                          </div>
                        ))) : null}
                      {imagePreviews ? (
                        <div className="flex flex-col justify-center items-center border border-b rounded-lg h-32">
                          <label
                            htmlFor="add-more-product-image-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>
                              <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <input type="file" name="add-more-product-image-upload" id="add-more-product-image-upload" className="sr-only" onChange={(e) => void handleAddMoreImages(e)} multiple accept="image/*" />
                          </label>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex flex-row items-end justify-end gap-2">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className=" justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                  <div className="mb-2 font-light underline" onClick={() => setOpen(false)}>Close</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddSurauForm;
