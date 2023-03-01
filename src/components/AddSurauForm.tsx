/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PhotoIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic'
import type { FC } from 'react';
import React, { useEffect, useState } from 'react'
import { useS3Upload } from 'next-s3-upload';
import Image from 'next/image'
const Select = dynamic(() => import("react-select"), {
  ssr: true,
})

type State = {
  administrative_division: string;
  state: string
  capital: string,
  royal_capital: string,
  population: number,
  total_area: number,
  licence_plate_prefix: string,
  phone_area_code: string,
  abbreviation: string,
  ISO: string,
  FIPS: string,
  HDI: number,
  region: string,
  head_of_state: string,
  head_of_goverment: string
}

export type AddSurauFormProps = {
  open: boolean,
  setOpen: (open: boolean) => void
}

export type ImagePreviews = {
  id: string,
  url: string
}

const AddSurauForm: FC<AddSurauFormProps> = ({ open, setOpen }) => {

  const [state, setState] = useState<State[]>([]);
  const [district, setDistrict] = useState<[]>([]);
  const [choosenState, setChoosenState] = useState("");
  const [imagePreviews, setImagePreviews] = useState<ImagePreviews[]>();
  const [loading, setLoading] = useState(false);

  const { uploadToS3 } = useS3Upload();

  const handleNegeriChange = (e: any) => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    const negeri = e.state as string
    void fetch(`https://jianliew.me/malaysia-api/state/v1/${negeri.toLowerCase()}.json`)
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const daerah: any = []

        data.administrative_districts.forEach((item: any) => {
          daerah.push({
            label: item,
            value: item
          })
        })
        console.log(daerah)

        setDistrict(daerah)
      })
    console.log(district)
  }

  const handleAddMoreImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target?.files[0];
    const { url } = await uploadToS3(file as File);

    setImagePreviews([...imagePreviews as ImagePreviews[], URL.createObjectURL(file as Blob) as unknown as ImagePreviews]);
    console.log(imagePreviews)
  }

  const onProductImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const images: ImagePreviews[] = [];
    const urls: string[] = [];

    if (e.target.files === null) return;

    for (const element of e.target.files) {
      images.push(URL.createObjectURL(element as Blob) as unknown as ImagePreviews);
      const { url } = await uploadToS3(element);
      urls.push(url);
    }
    console.log(urls)
    setImagePreviews(images);
    // const { url } = await uploadToS3(file);
    // setValue('image', urls.map(url => ({ src: url })));
  }


  useEffect(() => {
    void fetch("https://jianliew.me/malaysia-api/state/v1/all.json")
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setState(data)
      })
  }, [])

  return (
    <>
      <div className="h-full">
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
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="surau-name"
                          id="surau-name"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 sm:col-span-2">
                      <label htmlFor="surau-name" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <div className="mt-1 block rounded-md shadow-sm w-full relative z-10">
                        <Select
                          options={state}
                          getOptionLabel={(option: any) => option.state}
                          getOptionValue={(option: any) => option.state}
                          onChange={(e) => handleNegeriChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    </div>
                  ) : null}

                  {!loading && district.length !== 0 ? (
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2 sm:col-span-2">
                        <label htmlFor="surau-name" className="block text-sm font-medium text-gray-700">
                          District
                        </label>
                        <div className="mt-1 block rounded-md shadow-sm w-full relative z-0">
                          <Select
                            options={district}
                          />
                        </div>
                      </div>
                    </div>) : null}
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
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief direction or guide to the surau. eg. near to the mosque, near to the shop lot, etc.
                    </p>
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
                    <div className="grid-cols-2 p-4 space-y-2 grid gap-2">
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
                    type="submit"
                    className=" justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
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
