/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import dynamic from 'next/dynamic'
import type { FC} from 'react';
import { useEffect, useState } from 'react'
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

const AddSurauForm: FC<AddSurauFormProps> = ({ open, setOpen }) => {

  const [state, setState] = useState<State[]>([]);

  useEffect(() => {
    void fetch("https://jianliew.me/malaysia-api/state/v1/all.json")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setState(data)
      })
  }, [])

  return (
    <>
      <div className="">
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
                      <div className="mt-1 block rounded-md shadow-sm w-full">
                        <Select
                          options={state}
                          getOptionLabel={(option: any) => option.state}
                          getOptionValue={(option: any) => option.state}
                        />
                      </div>
                    </div>
                  </div>
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
